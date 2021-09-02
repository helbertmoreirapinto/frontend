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
                age: nextExam.age,
                tkc: nextExam.tkc,
                badd: nextExam.badd,
                isv: nextExam.isv, 
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
    Form
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
            age,
            examId
            tkc
            badd
            isv
          }
        }
      `,
      variables: {
        id: window.localStorage.getItem("userId"),
      },
    },
  },
  created() {
    window.addEventListener("keydown", this.keyevent);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyevent);
  },
  methods: {
    keyevent(e) {
      if (e.key === "Enter") {
        console.log(this.data)
        this.nextExamMethod(this.data);
      }
    },
    async nextExamMethod(event) {
      // Call to the graphql mutation
      console.log("---");
      console.log(event);
      console.log("---");
      await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ExamAns($userId: String!, $examId: String!, $answer: Int!) {
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
  height: calc(100vh - 30px);
  display: grid;
  grid-template-columns: 80% 20%;
  width: 80%;
}
.top {
  display: flex;
  flex-direction: column;
  width: 150%;
}
</style>