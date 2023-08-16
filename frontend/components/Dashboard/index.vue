<script setup>
definePageMeta({
    middleware:"auth0"
})

const apiData = ref(null)
 
const currentStatus = ref("") 
const currentCost = ref("") 
const currentDate = ref("") 
const currentID = ref("") 
const currentAdditionals = ref([]) 
const currentUserID = ref(null);

const dashboardVisability = ref(false) 
const Orders = ref([]) 
const currentOrders = ref([]) 


function logout(){
    useNuxtApp().$auth0.logout();
    const token = useCookie('token')
    token.value = null
    
    

}

function getOrders() {
    useNuxtApp().$api.get("/users/me/").then((response) => {
    currentUserID.value  = response.data.id;
    // console.log(currentUserID.value)
    useNuxtApp().$api.get(`/users/${currentUserID.value}/items/`)
    .then((response) => {
        currentOrders.value = response.data;
        const numOrders = currentOrders.value.length;
        

        for (let i = 0; i < numOrders; i++) {
                Orders.value.push({
                id: currentOrders.value[i]["id"],
                name: currentOrders.value[i]["name"],
                date: currentOrders.value[i]["date"],
                cost: currentOrders.value[i]["cost"],
                status: currentOrders.value[i]["status"],
                health_issues: currentOrders.value[i]["health_issues"],
                want_description: currentOrders.value[i]["want_description"],
                onClick: () => {
                    currentID.value =currentOrders.value[i]["id"]
                    currentStatus.value = currentOrders.value[i]["status"] 
                    currentCost.value = currentOrders.value[i]["cost"] 
                    currentDate.value = currentOrders.value[i]["date"] 
                    currentAdditionals.value = JSON.parse(currentOrders.value[i]["health_issues"])
                    
                    dashboardVisability.value = true;
                    // console.log(questionCards.value[i]["id"])
                }
            })
            }
    });
  });



}

function onDelete(){
    useNuxtApp().$api.delete(`/items/delete/${currentID.value}/`)
    window.location.reload()
}

const router = useRouter()

function onChangeOrder(){
    router.push({ path: '/dashboard/edit-order', query: { data: currentID.value } })
}


getOrders();

</script>

<template>
    <div class="h-full bg-indigo-500 drop-shadow-2xl rounded-xl  m-6 ">
        <div class="text-white text-center p-6 rounded-lg">
            <div class="grid grid-cols-12 gap-4">
                
                <!-- Narrow column -->
                <div class="lg:col-span-3 min-[300px]:col-span-12 bg-white p-4 rounded-lg">
                    
                    <div class="overflow-y-auto w-full h-[65vh] rounded-lg bg-white">
                        <q-btn  v-for="item in Orders" :key="item.id" @click="item.onClick" class="rounded-md bg-[#00C2A6] text-white w-full my-2">Order: {{ item.name }}</q-btn>
                    </div>
                    
                    <q-btn to="/dashboard/create-order" class="w-full bg-[#008B73] mt-5">Create order</q-btn>
                    <q-btn @click="logout()" class="w-full bg-[#CB0000] mt-5">Logout</q-btn>
                </div>
                
                <!-- Wide Column -->
                <div v-if="dashboardVisability" class="lg:col-span-9 min-[300px]:col-span-12 bg-white p-4 rounded-lg">
                    <!-- /TODO: Implement UI for dynamically creating sections with a schema specification -->
                    <div class="grid grid-cols-3 gap-4">
                        <q-btn  size="lg" class="w-full bg-[#00C2A6] ">Status: {{currentStatus}}</q-btn>
                        <q-btn size="lg" class="w-full bg-[#00C2A6] ">Cost: {{currentCost}}$</q-btn>
                        <q-btn size="lg" class="w-full bg-[#00C2A6] ">Date: {{ currentDate }}</q-btn>
                    </div>
                    <div class="overflow-y-auto w-full h-[55vh] rounded-lg bg-white my-10">
                        <div v-for="item in currentAdditionals" :key="item" class="rounded-md h-[15vh] bg-[#66BAA8] text-white text-lg text-left w-full p-10 my-2">{{ item.value }}</div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <q-btn size="lg" @click="onChangeOrder()" class="w-full bg-indigo-500 ">Edit</q-btn>
                        <q-btn size="lg" @click="onDelete()" class="w-full bg-[#CB0000] ">Delete</q-btn>
                    </div>
                </div>
                
            </div>
            
        </div>

    </div>
</template>

<style lang="scss">
</style>
