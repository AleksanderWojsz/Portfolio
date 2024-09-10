<script setup>

</script>

<template>
    <div>
        <p class="w-fit m-auto text-xl">Classes taken</p>
        <div class="paper flex flex-col space-y-2 mt-4 pt-4">

            <list_el>These</list_el>
            <list_el>And these</list_el>
            <list_el>And these</list_el>
            <list_el>And these</list_el>
            <list_el>And these</list_el>
            <list_el>And these</list_el>
            <list_el>And these</list_el>

        </div>
    </div>

</template>

<style scoped>
    list_el {
        position: relative;
        padding-left: 20px;
        margin-left: 20px;
    }

    list_el::before {
        content: "-";
        position: absolute;
        left: 0;
    }
</style>