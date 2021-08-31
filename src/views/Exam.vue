<template>
  <div class="container">
    <div class="top">
      <Img v-if="nextExamComputed" :src="nextExamComputed" />
    </div>
    <div>
      <Form
        :data="
          this.nextExam
            ? {
                patientAge: nextExam.patientAge,
                info01: nextExam.info01,
                info02: nextExam.info02,
                info03: nextExam.info03,
                info04: nextExam.info04
              }
            : {}
        "
        @nextExam="nextExamMethod($event)"
      ></Form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
function _arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

import Img from "@/components/exams/Img";
import Form from "@/components/exams/Form";
export default {
  components: {
    Img,
    Form,
  },
  computed: {
    nextExamComputed() {
      if (this.nextExam) {
        return _arrayBufferToBase64(this.nextExam.file.data);
      }
      return null;
    },
  },
  apollo: {
    nextExam: {
      query: gql`
        query Test($id: String!) {
          nextExam(userId: $id) {
            file
            patientAge
            info01
            info02
            info03
            info04
          }
        }
      `,
      variables: {
        id: window.localStorage.getItem("userId"),
      },
    },
  },
  created() {
    window.addEventListener('keydown', this.keyevent)
    /* this.$apollo.queries.nextExam.refetch() */
  },
  beforeDestroy(){
    window.removeEventListener('keydown',this.keyevent)
  },
  methods: {
    keyevent(e){
      console.log(e.key)//e.key é a tecla digitada, aqui vc faz oq vc quiser com as teclas q vc quiser
    },
    async nextExamMethod(event) {
      // Call to the graphql mutation
      await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ExamAns($userId: String!, $examId: ID!, $answer: Int!) {
            examAns(userId: $userId, examId: $examId, answer: $answer)
          }
        `,
        // Parameters
        variables: {
          userId: window.localStorage.getItem("userId"),
          examId: this.nextExam.examId,
          answer: +event,
        },
      });
      this.$apollo.queries.nextExam.refetch();
    },
  },
};
</script>

<style scoped>
.container {
  height: calc(100vh - 5px);
  display: grid;
  grid-template-columns: 80% 20%;
}
.top {
  display: flex;
  flex-direction: column;
}
</style>