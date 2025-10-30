<template>
  <CustomersComponentVue/>
</template>

<script>
import CustomersComponentVue from './components/CustomersComponent.vue'

export default {
  name: 'App',
  components: {
    CustomersComponentVue
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
