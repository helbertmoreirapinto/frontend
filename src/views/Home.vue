<template>
  <div class="container">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
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