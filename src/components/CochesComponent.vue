<template>
  <div>
    <h1 style="text-decoration: underline">API Coches</h1>
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
import axios from "axios";
//SI NECESITAMOS VARIABLES PARA TODO EL COMPONENTE Y SUS METODOS 
//SE DECLARAN AQUI (mounted, methods, create)
let urlApi = "https://apicochespaco.azurewebsites.net/";
export default {
    name: "CochesComponent",
    data(){
        return {
            coches: []
        }
    }, mounted(){
        var request = "webresources/coches";
        //LAS VARIABLES FUERA DEL EXPORT NO UTILIZAN THIS
        let url = urlApi + request;
        axios.get(url).then(response => {
            console.log(response);
            this.coches = response.data
        })
    }
}
</script>

<style>

</style>