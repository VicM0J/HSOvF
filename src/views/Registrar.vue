<template>
  <div>
    <h1>Registro de Usuario</h1>
    <form @submit.prevent="guardarUsuario">
      <label for="nombres">Nombres:</label>
      <input type="text" v-model="formData.nombres" id="nombres" required />

      <label for="apellido_p">Apellido Paterno:</label>
      <input type="text" v-model="formData.apellido_p" id="apellido_p" required />

      <label for="apellido_m">Apellido Materno:</label>
      <input type="text" v-model="formData.apellido_m" id="apellido_m" required />

      <label for="usuario">Usuario:</label>
      <input type="text" v-model="formData.usuario" id="usuario" required />

      <label for="contrasena">Contraseña:</label>
      <input type="password" v-model="formData.contrasena" id="contrasena" required />

      <label for="contacto">Contacto:</label>
      <input type="text" v-model="formData.contacto" id="contacto" required />

      <button type="submit">Guardar</button>
    </form>
    <p v-if="mensaje" :class="{ error: !registroExitoso, success: registroExitoso }">
      {{ mensaje }}
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "RegistroUsuario",
  setup() {
    const formData = ref({
      nombres: "",
      apellido_p: "",
      apellido_m: "",
      usuario: "",
      contrasena: "",
      contacto: "",
    });

    const mensaje = ref("");
    const registroExitoso = ref(false);

    const guardarUsuario = async () => {
      try {
        const response = await axios.post("http://localhost/express", formData.value, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.data.success) {
          registroExitoso.value = true;
          mensaje.value = response.data.message;
          setTimeout(() => {
            formData.value = {
              nombres: "",
              apellido_p: "",
              apellido_m: "",
              usuario: "",
              contrasena: "",
              contacto: "",
            };
          }, 2000);
        } else {
          registroExitoso.value = false;
          mensaje.value = response.data.message;
        }
      } catch (error) {
        registroExitoso.value = false;
        mensaje.value = "Ocurrió un error al guardar el usuario.";
        console.error(error);
      }
    };

    return { formData, mensaje, registroExitoso, guardarUsuario };
  },
};
</script>

