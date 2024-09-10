<script setup>

</script>

<template>
    <div class="folded-list mr-4">
        <a class="folded-list-element" href="https://github.com/AleksanderWojsz">
            <img alt="GitHub" src="/src/assets/github-mark.png" width="50" height="50">
        </a>
        <a class="folded-list-element" href="https://pl.linkedin.com/in/aleksander-wojsz-181038240">
            <img alt="LinkedIn" src="/src/assets/linkedin.png" width="50" height="50">
        </a>
        <div class="folded-list-element"></div>
        <div class="folded-list-element">Contact</div>
        <RouterLink to="/other-stuff" class="folded-list-element">Other stuff</RouterLink>
    </div>
</template>

<style scoped>

/* https://www.geekboots.com/css/folding-paper-effect */
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


</style>