import CustomersComponent from "./components/CustomersComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import EmpleadosComponent from "./components/EmpleadosComponent.vue"
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";
const myRoutes = [
    {path: "/", component: EmpleadosComponent},
    {path: "/customers", component: CustomersComponent},
    {path: "/coches", component: CochesComponent},
    {path: "/empleadosoficios/:oficio", component: EmpleadosOficios }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;