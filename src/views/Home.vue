<script setup>

import DoneProjects from "@/components/DoneProjects.vue";
import NameAndFaceImage from "@/components/NameAndFaceImage.vue";
import TechnologiesUsed from "@/components/TechnologiesUsed.vue";
import ClassesTaken from "@/components/ClassesTaken.vue";

</script>

<template>

    <NameAndFaceImage></NameAndFaceImage>
    <div class="flex flex-col justify-center items-center md:flex-row md:items-start gap-x-[10vw] gap-y-[15vw] my-[10vh]">
        <DoneProjects></DoneProjects>
        <ClassesTaken></ClassesTaken>
    </div>
    <TechnologiesUsed></TechnologiesUsed>

</template>

<style scoped>


</style>