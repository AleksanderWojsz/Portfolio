<script setup>

import DoneProjects from "@/components/DoneProjects.vue";
import NameAndFaceImage from "@/components/NameAndFaceImage.vue";
import Sidebar from "@/components/Sidebar.vue";
import TechnologiesUsed from "@/components/TechnologiesUsed.vue";
import ClassesTaken from "@/components/ClassesTaken.vue";
import { onMounted } from 'vue';

// Sets `left` attribute of `left-col` to minus its width
onMounted(() => {
    document.getElementById("left-col").style.left = "-" + document.getElementById("sidebar").offsetWidth.toString() + "px"
});

</script>

<template>

<div class="centred-col pb-[40px]">

    <div class="w-full">
        <NameAndFaceImage></NameAndFaceImage>
        <div class="flex flex-row justify-center gap-x-[10vw] my-[10vh]">
            <DoneProjects></DoneProjects>
            <ClassesTaken></ClassesTaken>
        </div>
        <TechnologiesUsed></TechnologiesUsed>
    </div>

    <div id="left-col" class="left-col">
        <div id="sidebar" class="fixed" style="top: 35%; transform: translateY(-50%);">
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