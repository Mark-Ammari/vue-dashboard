<template>
    <div class="block" :class="{true: success, false: !success}">
    </div>
</template>

<script>
    export default {
        props: ["success"]
    }
</script>

<style scoped>
    .block {
        background-color: gray;
        width: 100px;
        height: 100px;
        border: 3px solid black; 
    }

    .true {
        background-color: green;
    }

    .false {
        background-color: red;
    }
</style>