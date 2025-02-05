// middleware/auth.js
import { gql } from 'graphql-tag'

/**
 * A simple cookie parser that reads cookies from the request header.
 */
function parseCookies(req) {
    const list = {}
    const cookieHeader = req.headers.cookie
    if (!cookieHeader) return list

    cookieHeader.split(';').forEach(cookie => {
        let [name, ...rest] = cookie.split('=')
        name = name.trim()
        if (!name) return
        const value = rest.join('=').trim()
        if (!value) return
        list[name] = decodeURIComponent(value)
    })
    return list
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    // List routes that do not require authentication.
    const publicRoutes = ['/admin/login', '/signup']
    if (publicRoutes.includes(to.path)) {
        return
    }

    // If running on the server (for example, during an initial page refresh),
    // we can read the incoming cookies directly.
    if (process.server) {
        const event = useRequestEvent()
        const req = event.node.req
        const cookies = parseCookies(req)
        const token = cookies['auth-token']

        // If no token is found, redirect immediately.
        if (!token) {
            return navigateTo('/admin/login')
        }

        try {
            // Conditionally import 'jsonwebtoken' (only available on server).
            const jwt = require('jsonwebtoken')
            const config = useRuntimeConfig()
            jwt.verify(token, config.jwtSecret)
            // If the token is valid, allow the route.
            return
        } catch (error) {
            // Invalid token – redirect to login.
            return navigateTo('/admin/login')
        }
    } else {
        // On the client side, use Apollo to query for the current user.
        const { client } = useApolloClient()

        // Define the query for fetching the current user.
        const GET_CURRENT_USER = gql`
            query GetCurrentUser {
                currentUser {
                    id
                    email
                }
            }
        `

        try {
            // Using a network-only fetchPolicy ensures we hit the server.
            const { data } = await client.query({
                query: GET_CURRENT_USER,
                fetchPolicy: 'network-only'
            })

            // If no user data is returned, redirect to login.
            if (!data || !data.currentUser) {
                return navigateTo('/admin/login')
            }
        } catch (error) {
            // In case of any error, redirect to login.
            return navigateTo('/admin/login')
        }
    }
})
