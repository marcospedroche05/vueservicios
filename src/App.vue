<template>
  <EmpleadosComponentVue/>
</template>

<script>
import EmpleadosComponentVue from './components/EmpleadosComponent.vue'

export default {
  name: 'App',
  components: {
    EmpleadosComponentVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
