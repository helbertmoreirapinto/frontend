<template>
    <div class="container">
        <img :src="`data:image/jpeg;charset=utf-8;base64,${src}`" alt="Exame" class="image">
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
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