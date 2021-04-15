<template>
<div class="form">
    <div class="items">
        <el-radio v-model="radio" label="1">Ceratocone</el-radio>
        <el-radio v-model="radio" label="2">Ceratocone2</el-radio>
        <el-radio v-model="radio" label="3">Ceratocone3</el-radio>
        <el-radio v-model="radio" label="4">Ceratocone4</el-radio>
        <el-radio v-model="radio" label="5">Ceratocone5</el-radio>  
        <el-radio v-model="radio" label="6">Ceratocone6</el-radio>
        <el-radio v-model="radio" label="7">Ceratocone7</el-radio>
        <el-radio v-model="radio" label="8">Ceratocone8</el-radio>
        <el-radio v-model="radio" label="9">Ceratocone9</el-radio>
        <div></div>
    </div>
    <div class="submit">
        <el-button type="primary">Próximo</el-button>
    </div>
</div>

</template>

<script>
    export default {
        data() {
            return {
                radio: '1'
            }
        },
    }
</script>

<style scoped>
    .items{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 10px;
        align-items: center;
    }
    .form{
        display: flex;
        box-sizing: border-box;
        background-color: #eee;
        padding: 20px 0;
        height: 100%;
    }
    .submit{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }
</style>