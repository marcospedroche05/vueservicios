<template>
  <div><br/>
    <h1>Empleados oficios {{ oficio }}</h1>
    <br/>
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>ID empleado</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleadosOficio" :key="empleado">
                <td>{{ empleado.idEmpleado }}</td>
                <td>{{ empleado.apellido }}</td>
                <td>{{ empleado.oficio }}</td>
                <td>{{ empleado.salario }}</td>
                <td>{{ empleado.departamento }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import SeviceEmpleados from '@/services/ServiceEmpleados';
const service = new SeviceEmpleados();
export default {
    name: "EmpleadosOficios",
    data(){
        return{
            oficio: "",
            empleadosOficio: []
        }
    },
    methods: {
        cargaEmpleados(){
            service.getEmpleadosOficio(this.$route.params.oficio).then(result => {
                this.empleadosOficio = result
            })
        }
    },  
    mounted(){
        this.oficio = this.$route.params.oficio;
        this.cargaEmpleados();
    },
    watch: {
        '$route.params.oficio' (nextVal, oldVal){
            this.cargaEmpleados();
            this.oficio = this.$route.params.oficio;
            console.log(nextVal, oldVal)
        }
    }
}
</script>

<style>

</style>