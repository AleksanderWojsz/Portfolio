<script setup>

defineProps({
    closeContactPopup: Function,
})

const email = "wojszalek@gmail.com"

function copyToClipboard() {
  navigator.clipboard.writeText(email);
  document.getElementById("copy_img").src="/src/assets/checkmark.png";
}

</script>

<template>
<div v-on:click.self="closeContactPopup" class="popup">
    <div class="popup-inner">
        <div class="flex flex-row justify-between items-center">
            <p id="email">email: {{email}}</p>
            <img id="copy_img" src="/src/assets/copy_icon.png" class="cursor-pointer ml-1 pb-2 w-[30px] h-[40px]" v-on:click="copyToClipboard()" alt="copy_img">
        </div>
        <button class="absolute bottom-0 right-0 mb-3 mr-3" v-on:click.prevent="closeContactPopup">Close</button>
    </div>
</div>
</template>

<style scoped>

.popup {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
}

.popup-inner {
    background: #FFFF;

    margin: 0 auto;
    position: relative;
    top: 38%;
    transform: translateY(-50%);

    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    width: fit-content;
}

</style>