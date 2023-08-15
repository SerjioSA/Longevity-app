export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token')
    
    if (!token.value && to.fullPath == '/dashboard') {
      return navigateTo('/auth')
    }
    
  })