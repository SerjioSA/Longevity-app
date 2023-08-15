import { createAuth0,useAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
    createAuth0({
        domain: "dev-q3dqj8gf5ajd1ues.us.auth0.com",
        clientId: "1sM5HmvkoPpJO9DFwsZtWZQccv9tweCm",
        authorizationParams: {
          redirect_uri: "http://localhost:3000/"
        }
      })
  
      


  
})