<script setup>

import Sidebar from "@/components/Sidebar.vue";
import {onMounted, ref} from "vue";
import NavBar from "@/components/NavBar.vue";

const isMobileView = ref(false)
function checkWindowSize() {
    isMobileView.value = window.innerWidth < 1400;
    document.getElementById("left-col").style.left = "-" + document.getElementById("sidebar").offsetWidth.toString() + "px"
}

onMounted(() => {
    // Sets `left` attribute of `left-col` to minus its width

    checkWindowSize()

    window.addEventListener('resize', function(event){
        checkWindowSize()
    });
});



</script>

<template>

    <div class="centred-col pb-[40px]">

        <div v-if="isMobileView === false" id="left-col" class="left-col">
            <div id="sidebar" class="fixed" style="z-index: 100; top: 25%;">
                <Sidebar></Sidebar>
            </div>
        </div>
        <div v-else class="fixed mt-2" style="z-index: 100; left: 50%;">
            <NavBar></NavBar>
        </div>

        <div class="pt-[90px]">
            <RouterView></RouterView>
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
