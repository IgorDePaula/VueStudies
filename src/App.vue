<template>
  <div id="app">
    <vkalert class="danger curve full outline" :closable="true">  teste de alerta </vkalert>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$on('closed', () => console.log('closed'))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .close{
    display: none;
  }
</style>
