<template>
  <div class="form">
    <div class="data">
      <p>Informações paciente:</p>
      <p>Idade: {{ data.patientAge }}</p>
      <p>Info 1: {{ data.info01 }}</p>
      <p>Info 2: {{ data.info02 }}</p>
      <p>Info 3: {{ data.info03 }}</p>
      <p>Info 4: {{ data.info04 }}</p>
    </div>
    <div class="data">
      <div class="items-radio">
        <el-radio v-model="radio" label="1">[1] Pós operatório: Miopia/RK</el-radio>
        <el-radio v-model="radio" label="2">[2] Pós operatório: Hipermetropia</el-radio>
        <el-radio v-model="radio" label="3">[3] Pós operatório: Transp Córnea</el-radio>
        <el-radio v-model="radio" label="4">[4] Deformação corneana por lente de contato</el-radio>
        <el-radio v-model="radio" label="5">[5] Ceratocone 1</el-radio>
        <el-radio v-model="radio" label="6">[6] Ceratocone 2</el-radio>
        <el-radio v-model="radio" label="7">[7] Ceratocone 3</el-radio>
        <el-radio v-model="radio" label="8">[8] Normal</el-radio>
        <el-radio v-model="radio" label="9">[9] Pelúcida</el-radio>
        <el-radio v-model="radio" label="10">[0] Outros</el-radio>
      </div>
    </div>
    <div class="submit">
      <el-button type="primary" :disabled="Object.keys(data).length === 0" @click="$emit('nextExam', radio)" >Próximo</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      radio: "10",
    };
  },
  computed: {
    newExamDate() {
      return new Date(this.data.examDate);
    },
  },
};
</script>

<style scoped>
.items {
  margin-left: 10px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  align-items: center;
}
.items-radio {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: initial;
  grid-row-gap: 5px;
}
.form {
  margin: 5px;
  display: grid;
  box-sizing: border-box;
  background-color: #eee;
  padding: 20px 0;
  height: 100%;
}
.submit {
  display: grid;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.data {
  padding-left: 5px;
  font-family: "Quicksand";
  font-weight: bold;
  text-align: initial;
}
</style>