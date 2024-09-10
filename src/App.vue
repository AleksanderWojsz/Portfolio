<script setup>

import Sidebar from "@/components/Sidebar.vue";
import {onMounted} from "vue";

// Sets `left` attribute of `left-col` to minus its width
onMounted(() => {
    document.getElementById("left-col").style.left = "-" + document.getElementById("sidebar").offsetWidth.toString() + "px"
});


</script>

<template>

    <div class="centred-col pb-[40px]">

        <div class="w-full">
            <RouterView></RouterView>
        </div>

        <div id="left-col" class="left-col">
            <div id="sidebar" class="fixed" style="top: 25%;">
                <Sidebar></Sidebar>
            </div>
        </div>

    </div>

</template>

<style scoped>

.centred-col {
    position: relative;
    margin: 0 auto;

    width: fit-content;
    height: 100%;
}

.left-col {
    position: absolute;
}


</style>
