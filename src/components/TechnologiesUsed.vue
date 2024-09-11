<script setup>

function changeToColor(event_obj) {
  const img = event_obj.target;
  img.src = img.src.replace("/logos_bw/", "/logos_colour/");
}

function changeToBW(event_obj) {
  const img = event_obj.target;
  img.src = img.src.replace("/logos_colour/", "/logos_bw/");
}

</script>

<template>
    <div class="fade-in-right">
        <p class="w-fit m-auto text-xl mb-4">Technologies used</p>

        <div class="w-[75%] mx-auto flex flex-wrap justify-evenly items-center mt-6 gap-x-4 gap-y-4">
            <img class="logo" src="/src/assets/logos_bw/img_3.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_2.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_4.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_5.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_1.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_8.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_9.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_7.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_6.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
            <img class="logo" src="/src/assets/logos_bw/img_10.png" alt="logo" v-on:mouseover="changeToColor" v-on:mouseleave="changeToBW">
        </div>
    </div>
</template>

<style scoped>

.logo {
    width: auto;
    height: 90px;
}

</style>
