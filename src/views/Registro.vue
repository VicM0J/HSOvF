<template>
    <div class="register-container">
      <div class="register-box">
        <h2>Registro de Usuario</h2>
        <form @submit.prevent="register" class="register-form">
          <div class="form-group">
            <div class="input-container">
              <input
                type="text"
                id="id_usuario"
                v-model="form.id_usuario"
                placeholder=" "
                required
                :class="{'input-error': error && !form.id_usuario}"
              />
              <label for="id_usuario" class="floating-label">ID Usuario</label>
            </div>
          </div>
          <div class="form-group">
            <div class="input-container">
              <input
                type="text"
                id="nombres"
                v-model="form.nombres"
                placeholder=" "
                required
                :class="{'input-error': error && !form.nombres}"
              />
              <label for="nombres" class="floating-label">Nombres</label>
            </div>
          </div>
          <div class="form-group">
            <div class="input-container">
              <input
                type="text"
                id="apellido_p"
                v-model="form.apellido_p"
                placeholder=" "
                required
                :class="{'input-error': error && !form.apellido_p}"
              />
              <label for="apellido_p" class="floating-label">Apellido Paterno</label>
            </div>
          </div>
          <div class="form-group">
            <div class="input-container">
              <input
                type="text"
                id="apellido_m"
                v-model="form.apellido_m"
                placeholder=" "
                required
                :class="{'input-error': error && !form.apellido_m}"
              />
              <label for="apellido_m" class="floating-label">Apellido Materno</label>
            </div>
          </div>
          <div class="form-group">
            <div class="input-container">
              <input
                type="text"
                id="usuario"
                v-model="form.usuario"
                placeholder=" "
                required
                :class="{'input-error': error && !form.usuario}"
              />
              <label for="usuario" class="floating-label">Usuario</label>
            </div>
          </div>
          <div class="form-group">
            <div class="input-container">
              <input
                type="password"
                id="contrasena"
                v-model="form.contrasena"
                placeholder=" "
                required
                :class="{'input-error': error && !form.contrasena}"
              />
              <label for="contrasena" class="floating-label">Contraseña</label>
            </div>
          </div>
          <div class="form-group">
            <div class="input-container">
              <input
                type="text"
                id="contacto"
                v-model="form.contacto"
                placeholder=" "
                required
                :class="{'input-error': error && !form.contacto}"
              />
              <label for="contacto" class="floating-label">Contacto</label>
            </div>
          </div>
          <button type="submit" class="btn-register" :disabled="isSubmitting">
            <span v-if="isSubmitting">Cargando...</span>
            <span v-else>Registrar</span>
          </button>
        </form>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        form: {
          id_usuario: "",
          nombres: "",
          apellido_p: "",
          apellido_m: "",
          usuario: "",
          contrasena: "",
          contacto: "",
        },
        error: null,
        isSubmitting: false,
      };
    },
    methods: {
      async register() {
        this.error = null;
        this.isSubmitting = true;
  
        try {
          const response = await axios.post(
            "http://localhost:3000/api/HydraulicSolutionsO/register",
            this.form
          );
  
          alert(response.data.mensaje); 
          console.log(response.data.usuario); 
  
          this.$router.push("/login");
        } catch (error) {
          this.isSubmitting = false;
          if (error.response && error.response.status === 400) {
            this.error = "Error en el registro. Verifica tus datos.";
          } else {
            this.error = "Ocurrió un error al registrar al usuario.";
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f3f4f7, #dfe4ea);
  }
  
  .register-box {
    width: 100%;
    max-width: 500px;
    padding: 40px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .register-box:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
  
  h2 {
    margin-bottom: 30px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 500;
  }
  
  .form-group {
    margin-bottom: 20px;
    position: relative;
  }
  
  .input-container {
    position: relative;
    width: 100%;
  }
  
  .floating-label {
    position: absolute;
    top: 50%;
    left: 10px;
    font-size: 16px;
    color: #888;
    transform: translateY(-90%);
    transition: all 0.3s ease;
  }
  
  input, select {
    width: 100%;
    padding: 12px 10px;
    font-size: 16px;
    color: #333;
    background-color: #f7f8fa;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s ease, background-color 0.3s ease;
  }
  
  input:focus, select:focus {
    border-color: #5c6bc0;
    background-color: #fff;
    outline: none;
  }
  
  input:focus + .floating-label,
  input:not(:placeholder-shown) + .floating-label,
  select:focus + .floating-label {
    top: 0;
    left: 10px;
    font-size: 14px;
    color: #5c6bc0;
  }
  
  .input-error {
    border-color: #e74c3c;
    background-color: #fbe9e7;
  }
  
  .btn-register {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    color: #fff;
    background-color: #5c6bc0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-register:hover {
    background-color: #4e5ba6;
    transform: translateY(-5px);
  }
  
  .btn-register:disabled {
    background-color: #d1d8e3;
    cursor: not-allowed;
  }
  
  .error-message {
    margin-top: 15px;
    color: #e74c3c;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
  }
  
  @media (max-width: 480px) {
    .register-box {
      padding: 20px;
    }
  
    input, select {
      padding: 12px;
    }
  
    h2 {
      font-size: 22px;
    }
  }
  </style>
  