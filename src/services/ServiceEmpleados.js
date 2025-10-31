import axios from "axios";
import Global from "@/Global";

export default class SeviceEmpleados {
    getAllEmpleados(){
        return new Promise(function(resolve){
            var request = "api/Empleados";
            var url = Global.urlEmpleados + request;
            var empleados = [];
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados)
            })
        })
    }
    getEmpleado(id){
        return new Promise(function(resolve){
            var request = "api/Empleados/" + id;
            var url = Global.urlEmpleados + request;
            var empleado = null;
            axios.get(url).then(response => {
                empleado = response.data;
                resolve(empleado)
            })
        })
    }
    getOficios(){
        return new Promise(function(resolve){
            var request = "api/Empleados/oficios";
            var url = Global.urlEmpleados + request;
            var oficios = [];
            axios.get(url).then(response => {
                oficios = response.data;
                resolve(oficios)
            })
        })
    }
    getEmpleadosOficio(oficio){
        return new Promise(function(resolve){
            var request = "api/Empleados/EmpleadosOficio/" + oficio;
            var url = Global.urlEmpleados + request;
            var empleados = [];
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados)
            })
        })
    }
}