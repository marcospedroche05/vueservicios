<template>
  <div>
    <h1 style="text-decoration: underline">API VUEn coche</h1>
    <hr/>
    <div v-for="coche in coches" :key="coche">
        <h3 style="color:blue">
            {{coche.marca}} {{coche.modelo}}
        </h3>
        <p>Conductor: {{coche.conductor}}</p>
        <img :src="coche.imagen" width="150px" height="150px"/>
    </div>
  </div>
</template>

<script>

import ServiceCoches from "@/services/ServiceCoches";
//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENTE Y SUS METODOS 
//SE DECLARAN AQUI (mounted, methods, create)
const service = new ServiceCoches();
export default {
    name: "CochesComponent",
    data(){
        return {
            coches: []
        }
    }, mounted() {
        //UNA PROMESA ES UN OBJETO, NO UN METODO
        service.getAllCoches().then(result => {
            this.coches = result 
        }); 
    }
}
</script>

<style>

</style>