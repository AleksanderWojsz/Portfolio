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
    <!--  transform is here and not in `App.vue` because `ContactPopup` has fixed position  -->
    <!--  otherwise ContactPopup would be relative to NavBar  -->
    <div class="folded-list mr-4" style="transform: translate(-50%, 0);">
        <RouterLink v-if="route.path !== '/other-stuff'" to="/other-stuff" class="folded-list-element">Other stuff</RouterLink>
        <RouterLink v-else to="/" class="folded-list-element">Home</RouterLink>

        <div class="folded-list-element" style="cursor: pointer;" v-on:click="show_popup = true">Contact</div>

        <a target="_blank" class="folded-list-element" href="https://pl.linkedin.com/in/aleksander-wojsz">
            <img alt="LinkedIn" src="/src/assets/linkedin.png" width="40" height="40">
        </a>

        <a target="_blank" class="folded-list-element" href="https://github.com/AleksanderWojsz">
            <img alt="GitHub" src="/src/assets/github-mark.png" width="40" height="40">
        </a>

        <a target="_blank" class="folded-list-element" href="https://stackexchange.com/users/29134076/aleksander-wojsz?tab=top">
            <img alt="StackExchange" src="/src/assets/stack_exchange.png" width="40" height="40">
        </a>
    </div>
    <ContactPopup v-if="show_popup" v-bind:closeContactPopup="closeContactPopup"></ContactPopup>
</template>

<style scoped>

/* Modified https://www.geekboots.com/css/folding-paper-effect */
.folded-list {
    display: flex;
    flex-direction: row;
}

.folded-list-element {
    width: 70px;
    height: 70px;
    font-size: 15px;

    background-color: #ffffff;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 7px 10px rgba(0,0,0,0.2);
    transition: all 0.2s;
}

@media screen and (max-width:919px) {
    .folded-list-element {
        width: 60px;
        height: 60px;
        font-size: 14px;
    }
}

.folded-list-element:nth-child(odd) {
    transform: skewY(-10deg);
}

.folded-list-element:nth-child(even) {
    transform: skewY(10deg);
}

.folded-list-element:nth-child(odd):hover {
    transform: skewY(-12deg);
    background-color: #ececec;
}

.folded-list-element:nth-child(even):hover {
    transform: skewY(12deg);
    background-color: #ececec;
}


</style>