<template>
  <div class="container">
    <Login @login="login($event)" />
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag'
import Login from '@/components/Login.vue'
export default {
  name: 'Home',
  components: {
    Login,
  },
  methods: {
    async login(user) {
      const response = await this.$apollo.query({
        // Query
        query: gql`query Login ($username: String!,$password: String!) {
          login(login: $username,password: $password)
        }`,
        // Parameters
        variables: {
          username: user.username,
          password: user.password
        },
      })
      if(response.data.login){
        window.localStorage.setItem('userId',response.data.login)
        this.$router.push({name: 'Exam'})
      }
    }
  },
}
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex:1;
}
</style>