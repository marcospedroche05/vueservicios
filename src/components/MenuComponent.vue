<template>
  <div>
    <ul class="d-flex justify-content-around p-3">
        <li><router-link to="/">Empleados</router-link></li>
        <li><router-link to="/customers">Customers</router-link></li>
    </ul>
  </div>
  <hr/>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>

</style>