<script setup>
import Logo from '~/assets/Logo.svg'

</script>
<template>

<div class="w-full h-[50vh] bg-indigo-500 flex justify-center items-center  grid lg:grid-rows-2 pt-20">
        <div class="md:w-[100vh] min-[300px]:w-[40vh]">
            <!-- <p class="mb-2 text-[25vh] text-center text-white">REVITALIZE</p> -->
            <!-- <q-img class="w-[100vh]" src="~/assets/Logo.png"></q-img> -->
            <Logo class=" " :fontControlled="false" />
        </div>
        <!-- <div>
            <p class="mb-2 text-[2vh] text-center tracking-[5.5em] text-white ">YOUR HEALTH</p>
        </div> -->
        <div class="flex justify-center">
            <q-btn to="/dashboard" class="bg-white text-black">ORDER A CHECKUP</q-btn>
        </div>
</div>
</template>
