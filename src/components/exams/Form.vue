<template>
<div class="form">
    <div class="data">
        <p>Informações paciente</p>
        <p>Idade:{{data.patientAge}}</p>
    </div>
    <div class="items">
        <el-radio v-model="radio" label="1">Pós operatório: Miopia/RK</el-radio>
        <el-radio v-model="radio" label="4">Ceratocone 1</el-radio>
        <el-radio v-model="radio" label="7">Normal</el-radio>
        <el-radio v-model="radio" label="2">Pós operatório: Hipermetropia</el-radio>
        <el-radio v-model="radio" label="5">Ceratocone 2</el-radio>  
        <el-radio v-model="radio" label="8">Pelúcida</el-radio>
        <el-radio v-model="radio" label="3">Pós operatório: Transp Córnea</el-radio>
        <el-radio v-model="radio" label="6">Ceratocone 3</el-radio>
        <el-radio v-model="radio" label="9">Outros</el-radio>
        <div></div>
    </div>
    <div class="submit">
        <el-button type="primary" @click="$emit('nextExam',radio)">Próximo</el-button>
    </div>
</div>

</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                default: () => {return {patientAge: 'Carregando', examDate: '01-01-2020'}}
            },
        },
        data() {
            return {
                radio: '7'
            }
        },
        computed: {
            newExamDate() {
                return new Date(this.data.examDate) 
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
    .data{
        padding-left: 20px;
        font-family: 'Quicksand';
        font-weight: bold;
    }
</style>