<template>
  <div class="container">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
export default {
  name: 'Home',
  components: {
    Login,
  }
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