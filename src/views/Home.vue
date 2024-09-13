<script setup>

import DoneProjects from "@/components/DoneProjects.vue";
import NameAndFaceImage from "@/components/NameAndFaceImage.vue";
import ClassesTaken from "@/components/ClassesTaken.vue";

</script>

<template>

    <NameAndFaceImage></NameAndFaceImage>
    <div  class="flex flex-col justify-center items-center md:flex-row md:items-start gap-x-[2vw] gap-y-[7vh] my-[10vh]">
        <DoneProjects></DoneProjects>
        <ClassesTaken></ClassesTaken>
    </div>

</template>

<style scoped>


</style>