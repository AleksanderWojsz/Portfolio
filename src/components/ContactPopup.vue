<script setup>

defineProps({
    closeContactPopup: Function,
})


</script>

<template>
<div v-on:click.self="closeContactPopup" class="popup">
    <div class="popup-inner">
        <p>email: wojszalek@gmail.com</p>
        <button class="absolute bottom-0 right-0 mb-4 mr-4" v-on:click.prevent="closeContactPopup">Close</button>
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

    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 500px;
}

</style>