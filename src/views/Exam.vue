<template>
    <div class="container">
        <div class="top">
            <Img v-if="nextExamComputed" :src="nextExamComputed" />
        </div>
        <div>
            <Form :data="this.nextExam? {patientAge: nextExam.patientAge, examDate: nextExam.examDate} : {}" @nextExam="nextExamMethod($event)"></Form>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

import Img from "@/components/exams/Img";
import Form from "@/components/exams/Form";
    export default {
        components: {
            Img,
            Form,
        },
        computed:{
            nextExamComputed(){
                if(this.nextExam){
                    return _arrayBufferToBase64( this.nextExam.file.data )
                }
                return null
               
            }
        },
        apollo:{
            nextExam: {
                query: gql`query Test($id: ID!){
                  nextExam(userId: $id){
                    file,
                    examDate
                    patientAge
                    examId
                  }
                }` ,
                variables:{
                  id: 1
                }
            },
        },
        methods:{
            async nextExamMethod(event) {
                // Call to the graphql mutation
                await this.$apollo.mutate({
                  // Query
                  mutation: gql`mutation ExamAns ($userId: ID!,$examId: ID!,$answer: Int!) {
                    examAns(userId: $userId,examId: $examId, answer: $answer)
                  }`,
                  // Parameters
                  variables: {
                    userId: 1,
                    examId: this.nextExam.examId,
                    answer: +event,
                  },
                })
                this.$apollo.queries.nextExam.refetch()
            }
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