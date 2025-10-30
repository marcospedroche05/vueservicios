<template>
  <div class="elegant-container">
    <div class="header-section">
      <div class="gold-line"></div>
      <h1 class="elegant-title">Customer Management</h1>
      <p class="elegant-subtitle">Excellence in Every Detail</p>
      <div class="gold-line"></div>
    </div>
    
    <div class="table-wrapper">
      <div class="table-container">
        <table class="elegant-table">
          <thead>
            <tr>
              <th>
                <span class="th-content">Name</span>
              </th>
              <th>
                <span class="th-content">Company</span>
              </th>
              <th>
                <span class="th-content">Address</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer" class="table-row">
              <td class="name-cell">{{customer.ContactName}}</td>
              <td>{{customer.CompanyName}}</td>
              <td class="address-cell">{{customer.Address}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Global from '../Global'
import axios from "axios"
var urlApi = Global.urlCustomers;
export default {
    name: "CustomersComponent",
    data(){
        return {
            customers: []
        }
    }, mounted(){
        var request = "/customers";
        var url = urlApi + request;
        axios.get(url).then(response => {
            this.customers = response.data.value
            console.log(this.customers);
        })
    }
}
</script>

<style scoped>
    /* Variables de diseño elegante */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .elegant-container {
        min-height: 100vh;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
        padding: 3rem 2rem;
        font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        position: relative;
        overflow-x: hidden;
    }

    /* Efecto de partículas sutiles en el fondo */
    .elegant-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
            radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
        pointer-events: none;
    }

    /* Sección del header */
    .header-section {
        text-align: center;
        margin-bottom: 4rem;
        position: relative;
        z-index: 1;
    }

    .gold-line {
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #d4af37, transparent);
        margin: 1.5rem auto;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }

    .elegant-title {
        font-size: 3rem;
        font-weight: 300;
        color: #ffffff;
        letter-spacing: 4px;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        position: relative;
        display: inline-block;
    }

    .elegant-title::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 1px;
        background: linear-gradient(90deg, transparent, #d4af37, transparent);
    }

    .elegant-subtitle {
        font-size: 1rem;
        color: #d4af37;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-weight: 400;
        opacity: 0.9;
    }

    /* Contenedor de la tabla */
    .table-wrapper {
        display: flex;
        justify-content: center;
        padding: 0 1rem;
        position: relative;
        z-index: 1;
    }

    .table-container {
        width: 100%;
        max-width: 1400px;
        background: rgba(20, 20, 20, 0.6);
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(212, 175, 55, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(212, 175, 55, 0.15);
    }

    /* Tabla elegante */
    .elegant-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        background: transparent;
    }

    /* Encabezado de la tabla */
    .elegant-table thead {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
        border-bottom: 2px solid #d4af37;
    }

    .elegant-table th {
        padding: 1.2rem 1.5rem;
        text-align: left;
        font-weight: 500;
        font-size: 0.9rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #d4af37;
        position: relative;
        border-bottom: 2px solid rgba(212, 175, 55, 0.3);
    }

    .th-content {
        position: relative;
        display: inline-block;
    }

    .th-content::before {
        content: '';
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        background: #d4af37;
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
    }

    /* Filas de la tabla */
    .table-row {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        background: transparent;
    }

    .table-row:hover {
        background: linear-gradient(
            90deg, 
            rgba(212, 175, 55, 0.08), 
            rgba(212, 175, 55, 0.12), 
            rgba(212, 175, 55, 0.08)
        );
        transform: translateX(8px);
        box-shadow: 
            -4px 0 0 rgba(212, 175, 55, 0.5),
            0 4px 20px rgba(212, 175, 55, 0.1);
    }

    /* Celdas de la tabla */
    .elegant-table td {
        padding: 1.2rem 1.5rem;
        color: #e0e0e0;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.6;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }

    /* Celda de nombre con énfasis */
    .name-cell {
        color: #ffffff;
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    /* Celda de dirección */
    .address-cell {
        color: #b0b0b0;
        font-size: 0.9rem;
    }

    /* Última fila sin borde */
    .table-row:last-child td {
        border-bottom: none;
    }

    /* Scrollbar personalizado */
    .table-container::-webkit-scrollbar {
        height: 8px;
    }

    .table-container::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    .table-container::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, #d4af37, #f4d47a);
        border-radius: 4px;
    }

    .table-container::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(90deg, #f4d47a, #d4af37);
    }

    /* Animación sutil de entrada */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .table-container {
        animation: fadeInUp 0.6s ease-out;
    }

    .header-section {
        animation: fadeInUp 0.6s ease-out 0.2s backwards;
    }

    /* Brillo sutil en hover del título */
    .elegant-title:hover {
        color: #d4af37;
        transition: color 0.3s ease;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .elegant-title {
            font-size: 2rem;
            letter-spacing: 2px;
        }

        .elegant-subtitle {
            font-size: 0.85rem;
            letter-spacing: 2px;
        }

        .table-container {
            padding: 1rem;
            overflow-x: auto;
        }

        .elegant-table th,
        .elegant-table td {
            padding: 0.8rem 1rem;
            font-size: 0.85rem;
        }
    }
</style>