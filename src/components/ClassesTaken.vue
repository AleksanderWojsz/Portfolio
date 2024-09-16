<script setup>

</script>

<template>
    <div class="overflow-x-hidden"> <!-- Otherwise page is wider during animation -->
        <div class="fade-in-right">
            <p class="w-fit m-auto text-xl">Other classes taken</p>
            <div class="paper-thin flex flex-col space-y-2 mt-4 pt-4">

                <list_el>Mathematical analysis</list_el>
                <list_el>Linear Algebra</list_el>
                <list_el>Set theory</list_el>
                <list_el>Discrete Mathematics</list_el>
                <list_el>Probability theory</list_el>
                <list_el>Languages and Automata Theory</list_el>

            </div>
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