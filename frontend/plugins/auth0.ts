import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const auth0 = createAuth0({
    domain: "dev-q3dqj8gf5ajd1ues.us.auth0.com",
    clientId: "1sM5HmvkoPpJO9DFwsZtWZQccv9tweCm",
    authorizationParams: {
      redirect_uri: "http://localhost:3000/"
    }
  })

  if (process.client) {
    nuxtApp.vueApp.use(auth0)
  }

  addRouteMiddleware('auth0', () => {
    if (process.client) {
      auth0.checkSession()
      if (!auth0.isAuthenticated.value) {
        auth0.loginWithRedirect({
          appState: {
            target: "/",
          },
        })
      }
    }
      
      
  })
  return {
    provide: {
        auth0:auth0
    }
  }
  
})
