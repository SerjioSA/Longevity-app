export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
    
  if (!token.value && useNuxtApp().$auth0.isAuthenticated.value) {
    
  const userInfo = useNuxtApp().$auth0.user;
  
  const data = {
    email: "delet_this",
    password: userInfo.value.email,
    username: userInfo.value.nickname
  };
  console.log(data)
  

  useNuxtApp().$api
    .post("/register/", data)
    .then((response) => {

      

      useNuxtApp().$api
      .post("/token/", data)
      .then((response) => {
        const token = useCookie('token')
        token.value = response.data.access_token;
      //   console.log(token.value)
        // console.log(tokenData.value)
        const router = useRouter();
        router.push({ path: "/dashboard" });
      
      })

    })
    .catch((err) => {
      if (err.response) {
        useNuxtApp().$api
        .post("/token/", data)
        .then((response) => {
          const token = useCookie('token')
          token.value = response.data.access_token;
          // console.log(token.value)
          // console.log(tokenData.value)
          const router = useRouter();
          router.push({ path: "/dashboard" });
        
        })


      }
    });
      
    }
    
  })