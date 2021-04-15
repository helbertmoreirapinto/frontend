<template>
    <div class="container">
        <img src="@/assets/logo.png" alt="Exame" class="image">
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 100%;
    }
    .container .image{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>