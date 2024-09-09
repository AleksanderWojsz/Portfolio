<script setup>

</script>

<template>
    <div>
        <p class="w-fit m-auto text-xl">Some projects I have done</p>
        <div class="paper flex flex-col space-y-2 mt-4 pt-4">

            <list_el>
            <p class="text-lg">Organiser website/Android apk</p>
            <div style="word-wrap: break-word;">
                Allows users to create or join family group and split housework
                among members.
            </div>
            </list_el>
            <list_el>drugi element listy</list_el>
            <list_el>drugi element listy</list_el>
            <list_el>drugi element listy</list_el>
            <list_el>drugi element listy</list_el>
            <list_el>drugi element listy</list_el>

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