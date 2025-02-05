export default defineNuxtRouteMiddleware(async (to, from) => {
        try {
            const {data} = await useFetch('/api/auth/check')
            console.log(data.value)
            if(!data.value?.email) {
                return navigateTo('/admin/login')
            }
        } catch (e) {
            console.error(e)
        }

})



