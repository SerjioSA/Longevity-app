<script setup>
import { date } from "quasar";
const inputs = ref([])
const order_name = ref("")
const cost = ref("")
const currentUserID = ref("")
const router = useRouter()
function addInput() {
  inputs.value.push({ value: '' })
}

function initiateData() {
    const currentDate = date.formatDate(Date.now(), "DD/MM/YYYY")
  const data = {
    name:order_name.value,
    date:currentDate,
    status:"started",
    cost:cost.value,
    health_issues:JSON.stringify(inputs.value)
  };
  return data;
}


function sendOrder(data) {
    useNuxtApp().$api.get("/users/me/").then((response) => {
    currentUserID.value  = response.data.id;
    console.log(currentUserID.value)
    useNuxtApp().$api.post(`/users/${currentUserID.value}/items/`,data)
        .then(
            router.push("/dashboard")
        );
})
    
}

function sendComponentData() {
  const data = initiateData();
  sendOrder(data);
}
</script>

<template>
    <q-form @submit="sendComponentData()"  class="mx-auto sm:w-2/3 md:w-1/2 text-black">
      <div class="q-pa-md q-gutter-md">

        <div class="my-md">
          <p class="text-xl">Order creation:</p>
        </div>

        <div class="q-my-md">
          <q-input
            outlined
            stack-label
            label="Order name"
            type="text"
            v-model="order_name"
            :rules="[(val) => !!val || 'Enter order name!']"
          ></q-input>
        </div>
        <div class="q-my-md">
            <p class="text-lg q-my-md">Expected cost:</p>
          <q-input
            outlined
            stack-label
            label="Cost"
            type="number"
            v-model="cost"
            :rules="[(val) => !!val || 'Enter you expected cost!']"
          ></q-input>
        </div>
        <div class="my-md">
          <p class="text-lg">Describe your known health problems:</p>
        </div>
        <div>
            <q-btn  size="lg" class="full-width mx-lg" label="Add description" @click="addInput" />
            <div v-for="(input, index) in inputs" :key="index">
            <q-input
            class="q-mt-md" 
            outlined
            stack-label 
            v-model="input.value" 
            :rules="[(val) => !!val || 'Enter description!']"
            :label="'Description ' + (index + 1)" />
            </div>
            <q-btn v-if="inputs.length !== 0" size="lg" class="full-width text-white mx-lg bg-[#CB0000]" label="Delete last description" @click="inputs.pop()" />
        </div>
        
        
      
      <div >
        <q-btn
          type="submit"
          color="primary"
          label="Create an order"
          size="lg"
          class="full-width">
        </q-btn>
        </div>
    </div>
    </q-form>
</template>