<template>
  <div class="form">
      <div>
        <div class="info">
          <p>TKC: {{ data.tkc }} | BAD-D: {{ data.badd }} | ISV: {{ data.isv }}</p>
        </div>
        <div class="items-radio">
          <el-radio v-model="radio" label="1"
            >[1] Pós operatório: Miopia/RK</el-radio
          >
          <el-radio v-model="radio" label="2"
            >[2] Pós operatório: Hipermetropia</el-radio
          >
          <el-radio v-model="radio" label="3"
            >[3] Pós operatório: Transp Córnea</el-radio
          >
          <el-radio v-model="radio" label="4"
            >[4] Deformação corneana por lente de contato</el-radio
          >
          <el-radio v-model="radio" label="5">[5] Ceratocone 1</el-radio>
          <el-radio v-model="radio" label="6">[6] Ceratocone 2</el-radio>
          <el-radio v-model="radio" label="7">[7] Ceratocone 3</el-radio>
          <el-radio v-model="radio" label="8">[8] Normal</el-radio>
          <el-radio v-model="radio" label="9">[9] Pelúcida</el-radio>
          <el-radio v-model="radio" label="0">[0] Outros</el-radio>
        </div>
      <div class="submit">
        <el-button
          type="primary"
          :disabled="Object.keys(data).length === 0"
          @click="$emit('nextExam', radio)"
          >Próximo</el-button
        >
      </div>
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
      radio: "0",
    };
  },
  computed: {
    newExamDate() {
      return new Date(this.data.examDate);
    },
  },
  created() {
    window.addEventListener("keydown", this.keyevent);
    /* this.$apollo.queries.nextExam.refetch() */
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyevent);
  },
  methods: {
    keyevent(e) {
      if (e.key === "1") this.radio = "1";
      if (e.key === "2") this.radio = "2";
      if (e.key === "3") this.radio = "3";
      if (e.key === "4") this.radio = "4";
      if (e.key === "5") this.radio = "5";
      if (e.key === "6") this.radio = "6";
      if (e.key === "7") this.radio = "7";
      if (e.key === "8") this.radio = "8";
      if (e.key === "9") this.radio = "9";
      if (e.key === "0") this.radio = "0";
    },
  },
};
</script>

<style scoped>
.items {
  margin-left: 10px;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  align-items: center;
}
.items-radio {
  display: grid;
  padding: 10px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: initial;
  grid-row-gap: 30px;
}
.form {
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;
  background-color: #eee;
  height: 95%;
  width: 200%;
}
.submit {
  display: grid;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.info {
  padding: 10px;
  font-family: "Quicksand";
  font-weight: normal;
  text-align: left;
}
</style>