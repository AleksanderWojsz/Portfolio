<script setup>

</script>

<template>
    <div id="parent" class="flex flex-col md:flex-row justify-center gap-x-[3vw] items-center">
        <div id="a" class="text-center">
            <p class="mt-16 text-3xl" >Hi, I am</p>
            <p class="text-4xl font-bold">Michal Lewandowski</p>
            <div style="word-wrap: break-word;" class="mx-auto mt-5 text-1xl max-w-[300px] md:max-w-[400px]" >
                Ala ma kota i mruczka psa i rybke i papuge i malpe i krowe w stodole i swinie i kury w zagrodzie
            </div>
        </div>
        <div id="b" class="w-3/4 md:w-1/2 max-w-[600px] h-auto">
            <img src="/src/assets/my_photo.png" alt="face sketch">
        </div>
    </div>
</template>

<style scoped>

@media screen and (max-width:919px) {
    #parent {
        display:flex;
        flex-flow: column;
    }
    #b{order:1;}
    #a{order:2;}
}

</style>