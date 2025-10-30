<template>
  <CochesComponentVue/>
</template>

<script>
import CochesComponentVue from './components/CochesComponent.vue'

export default {
  name: 'App',
  components: {
    CochesComponentVue
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
