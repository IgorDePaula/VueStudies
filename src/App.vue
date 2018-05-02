<template>
  <div id="app">
    <vkalert :class="classes" :closable="true">  teste de alerta </vkalert>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$on('closed', () => console.log('closed'))
  },
  data () {
    return {
      classes: ['success', 'curve', 'full', 'outline']
    }
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
