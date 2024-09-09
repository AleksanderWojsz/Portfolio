<script setup>


import DoneProjects from "@/components/DoneProjects.vue";
import NameAndFaceImage from "@/components/NameAndFaceImage.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
<!--    <div class="flex flex-row justify-center">-->
<!--        <div class="w-full">-->
<!--            <NameAndFaceImage></NameAndFaceImage>-->
<!--            <div class="flex flex-row justify-center gap-x-[10vw] mt-[10vh]">-->
<!--                <DoneProjects></DoneProjects>-->
<!--                <DoneProjects></DoneProjects>-->
<!--            </div>-->
<!--        </div>-->
<!--        <Sidebar></Sidebar>-->
<!--    </div>-->

<div class="centred-col">

    <div class="w-full">
        <NameAndFaceImage></NameAndFaceImage>
        <div class="flex flex-row justify-center gap-x-[10vw] mt-[10vh]">
            <DoneProjects></DoneProjects>
            <DoneProjects></DoneProjects>
        </div>
    </div>

    <div class="right-col">
        <div class="fixed" style="top: 35%; transform: translateY(-50%);">
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
    //height: 100%;
    height: 10000px;
}

.right-col {
    position: absolute;
    right: 110%;
    top: 0px;
}

</style>