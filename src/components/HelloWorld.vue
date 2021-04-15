<template>
  <div class="box">
    <span class="title">Login</span>
    <el-input placeholder="Digite o nome de usuario" v-model="username" class="input_login"></el-input>
    <el-input placeholder="Digite a senha" v-model="password" class="input_login" type="password"></el-input>
    <el-button type="primary" style="width:100px" >
      Login
    </el-button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      username: '',
      password: ''
    }
  },
}
</script>

<style scoped>
.box{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px;
  border: 2px solid #cccccc;
  border-radius: 20px;
}
.title{
  font-family: 'Quicksand';
  font-size: 2rem;
  font-weight: bold;
}
.input_login{
  margin-bottom: 10px;
}
input{
  margin: 0 0 10px 0;
  padding: 5px 10px;
  font-size: 1rem;
}
</style>
