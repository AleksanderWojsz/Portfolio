<script setup>

import ContactPopup from "@/components/ContactPopup.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";

function closeContactPopup() {
    show_popup.value = false;
}

const show_popup = ref(false);
const route = useRoute();

</script>

<template>
    <div class="folded-list mr-4">
        <RouterLink v-if="route.path !== '/other-stuff'" to="/other-stuff" class="folded-list-element">Other stuff</RouterLink>
        <RouterLink v-else to="/" class="folded-list-element">Home</RouterLink>

        <div class="folded-list-element" style="cursor: pointer;" v-on:click="show_popup = true">Contact</div>


        <div class="folded-list-element"></div>

        <a class="folded-list-element" href="https://github.com/AleksanderWojsz">
            <img alt="GitHub" src="/src/assets/github-mark.png" width="50" height="50">
        </a>

        <a class="folded-list-element" href="https://pl.linkedin.com/in/aleksander-wojsz-181038240">
            <img alt="LinkedIn" src="/src/assets/linkedin.png" width="50" height="50">
        </a>
    </div>
    <ContactPopup v-if="show_popup" v-bind:closeContactPopup="closeContactPopup"></ContactPopup>
</template>

<style scoped>

/* Modified https://www.geekboots.com/css/folding-paper-effect */
.folded-list {
    display: flex;
    flex-direction: column;
}

.folded-list-element {
    width: 70px;
    height: 70px;
    background-color: #ffffff;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 7px 10px rgba(0,0,0,0.2);
}

.folded-list-element:nth-child(odd) {
    transform: skewX(-10deg);
}

.folded-list-element:nth-child(even) {
    transform: skewX(10deg);
}

.folded-list-element:nth-child(odd):hover {
    transform: skewX(-12deg);
    background-color: #ececec;
}

.folded-list-element:nth-child(even):hover {
    transform: skewX(12deg);
    background-color: #ececec;
}


</style>