<template>
    <div class="container">
        <div class="top">
            <Img />
        </div>
        <div>
            <Form></Form>
        </div>
    </div>
</template>

<script>
import Img from "@/components/exams/Img";
import Form from "@/components/exams/Form";
    export default {
        components: {
            Img,
            Form,
        }
    }
</script>

<style scoped>
    .container{
        height: calc(100vh - 45px);
        display: grid;
        grid-template-rows: 80% 20%;
    }
    .top{
        display: flex;
        flex-direction: column;
    }
</style>