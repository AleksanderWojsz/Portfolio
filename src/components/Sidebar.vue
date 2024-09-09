<script setup>

</script>

<template>
    <div class="folded-list mr-4">
        <div class="folded-list-element">G</div>
        <div class="folded-list-element">E</div>
        <div class="folded-list-element">E</div>
        <div class="folded-list-element">K</div>
        <div class="folded-list-element">B</div>
        <div class="folded-list-element">O</div>
        <div class="folded-list-element">O</div>
        <div class="folded-list-element">T</div>
        <div class="folded-list-element">S</div>
    </div>
</template>

<style scoped>

.folded-list {
    display: flex;
    flex-direction: column;
}

.folded-list-element {
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 10px rgba(0,0,0,0.2);
}

.folded-list-element:nth-child(odd) {
    transform: skewX(15deg);
}

.folded-list-element:nth-child(even) {
    transform: skewX(-15deg);
}

</style>