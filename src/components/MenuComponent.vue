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
          <a class="nav-link" href="#">Link</a>
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
import Global from '@/Global';
import axios from 'axios';
var urlApi = Global.urlEmpleados;
export default {
    name: "MenuComponent",
    data(){
      return {
        oficios: []
      }
    }, mounted(){
      var request= "api/Empleados/oficios";
      var url = urlApi + request;
      axios.get(url).then(response => {
        this.oficios = response.data
      })
    }
}
</script>

<style>

</style>