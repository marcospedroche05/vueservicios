<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Empleados API</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/coches">Coches</router-link>
        </li>  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Oficios</a>
          <ul class="dropdown-menu">
            <li v-for="oficio in oficios" :key="oficio"><router-link :to="/empleadosoficios/ + oficio"  class="dropdown-item">{{ oficio }}</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
import SeviceEmpleados from '@/services/ServiceEmpleados';
const service = new SeviceEmpleados();
export default {
    name: "MenuComponent",
    data(){
      return {
        oficios: []
      }
    }, mounted(){
      service.getOficios().then(result => {
        this.oficios = result;
      })
    }
}
</script>

<style>

</style>