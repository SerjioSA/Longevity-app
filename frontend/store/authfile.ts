
import {createAuth0Client} from "@auth0/auth0-spa-js";

// these configuration should match on Auth0 platform
let auth = await createAuth0Client({
  domain: "dev-q3dqj8gf5ajd1ues.us.auth0.com",
  clientId: "1sM5HmvkoPpJO9DFwsZtWZQccv9tweCm",
  authorizationParams: {
    redirect_uri: "/test"
    } 
});

export default auth;