<template>
  <div class="container">
    <h1 class="titulo">Conoce nuestros servicios</h1>

    <table class="tabla-servicios">
      <thead>
        <tr>
          <th>Nombre del Servicio</th>
          <th>Componentes</th>
          <th>Precio</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="servicio in servicios" :key="servicio.nombre_servicio">
          <td>{{ servicio.nombre_servicio }}</td>
          <td>{{ servicio.componentes }}</td>
          <td>${{ servicio.precio }}</td>
          <td>{{ servicio.estatus }}</td>
        </tr>
      </tbody>
    </table>

    <div class="paypal-container">
    <div class="offer-content">
      <h1>Oferta de Mantenimiento</h1>
      <h2>Maximiza la eficiencia de tu sistema de agua</h2>
      <p>Las válvulas inteligentes de agua son una inversión clave para la gestión eficiente del consumo de agua. Asegúrate de que tu sistema esté funcionando correctamente y prolonga la vida útil de tus dispositivos con nuestro servicio de mantenimiento especializado.</p>
    </div>
    <div class="service-item">
          <img src="/img/mantenimiento.png">
          
        </div>

      <PaypalButton
        :amount="'25.00'"
        @paymentSuccess="handleSuccess"
        @paymentError="handleError"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PaypalButton from "../components/PaypalButton.vue";

export default {
  components: { PaypalButton },
  data() {
    return {
      servicios: [],
    };
  },
  methods: {
    async obtenerServicios() {
  try {
    const respuesta = await axios.get("https://hydraulic-solutions-optimization.onrender.com/api/HydraulicSoltionsO/servicios");
    this.servicios = respuesta.data; 
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
  }
}
,
    handleSuccess(details) {
      alert("Pago exitoso!");
      console.log(details);
    },
    handleError(error) {
      alert("Error al realizar el pago.");
      console.error(error);
    },
  },
  mounted() {
    this.obtenerServicios(); 
  },
};
</script>
