<script setup>

</script>

<template>
    <div class="DefaultLayout text-white bg-white h-screen">
    
        <div class="flex bg-indigo-500 justify-center items-center q-pa-md">
            
                <q-tabs
                    narrow-indicator
                    dense
                    align="justify"
                    class="text-white"
                >
                <q-route-tab to="/" label="Main page" />
                <q-route-tab to="/dashboard" label="Dashboard" />
                </q-tabs>

        </div>
        <slot/>
    </div>
</template>