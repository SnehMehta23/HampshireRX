import { gql } from 'graphql-tag';
export default defineNuxtRouteMiddleware(async(to, from) => {



    const GET_USER_QUERY = gql`
        query currentUser{
            currentUser {
                id
                email
            }
        }
    `;

    const {result, loading, error} = await useQuery(GET_USER_QUERY)
    watch(result, async (newValue, oldValue) => {
        if(!result.value.currentUser){
            return navigateTo('/admin/login')
        }
    })


})