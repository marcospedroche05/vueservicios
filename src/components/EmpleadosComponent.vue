<template>
  <div class="p-5 border border-primary z-1 m-5 rounded rounded-5">
    <h2>{{ mensaje }}</h2>
    <h1 class="text-primary">Empleados</h1>
    <select v-model="select" class="form-control">
      <option
        v-for="empleado in empleados"
        :key="empleado"
        :value="empleado.idEmpleado"
      >
        {{ empleado.apellido }}
      </option></select
    ><br />
    <button v-on:click="muestraSeleccionado" class="btn btn-outline-primary">
      Mostrar seleccion
    </button>
  </div>
  <div
    v-if="empleado"
    class="d-flex justify-content-center flex-column align-middle border border-info rounded rounded-5 p-3 m-5"
  >
    <h3>{{ empleado.apellido }}</h3>
    <h3>{{ empleado.oficio }}</h3>
    <h3>{{ empleado.salario }} €</h3>
  </div>
</template>

<script>
import SeviceEmpleados from '@/services/ServiceEmpleados';
const service = new SeviceEmpleados();
export default {
  name: "EmpleadosComponent",
  data() {
    return {
      empleados: [],
      select: [],
      idEmpleado: 0,
      empleado: null,
    };
  },
  mounted() {
    service.getAllEmpleados().then(result => {
      this.empleados = result;
    })
  },
  methods: {
    muestraSeleccionado() {
      this.idEmpleado = this.select;
      if (this.idEmpleado != 0) {
        service.getEmpleado(this.idEmpleado).then(result => {
          this.empleado = result
        })
      }
    },
  },
};
</script>

<style>
</style>