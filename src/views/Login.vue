<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <input
            type="text"
            id="usuario"
            v-model="form.usuario"
            placeholder=" " 
            required
            :class="{'input-error': error && !form.usuario}"
            autofocus
          />
          <label for="usuario" class="floating-label">Usuario</label>
        </div>
        <div class="form-group">
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
        <button type="submit" class="btn-login" :disabled="isSubmitting">
          <span v-if="isSubmitting">Cargando...</span>
          <span v-else>Iniciar Sesión</span>
        </button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>

      <div class="register-container">
        <p>¿No tienes cuenta?</p>
        <router-link to="/registro">
          <button class="btn-register">Registrarse</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        usuario: "",
        contrasena: "",
      },
      error: null,
      isSubmitting: false,
    };
  },
  methods: {
    async login() {
      this.error = null;
      this.isSubmitting = true;

      try {
        const response = await axios.post(
          "http://localhost:3000/api/HydraulicSoltionsO/login",
          this.form
        );

        alert(response.data.mensaje); 
        console.log(response.data.usuario); 

        localStorage.setItem("usuario", JSON.stringify(response.data.usuario));

        this.$router.push("/dashboard");
      } catch (error) {
        this.isSubmitting = false;
        if (error.response && error.response.status === 401) {
          this.error = "Usuario o contraseña incorrectos.";
        } else {
          this.error = "Ocurrió un error al iniciar sesión.";
        }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f3f4f7, #dfe4ea);
}

.login-box {
  width: 100%;
  max-width: 450px;
  padding: 40px 30px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-box:hover {
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
  margin-bottom: 30px;
  position: relative;
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

input {
  width: 100%;
  padding: 10px 10px;
  font-size: 16px;
  color: #333;
  background-color: #f7f8fa;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

input:focus {
  border-color: #5c6bc0;
  background-color: #fff;
  outline: none;
}

input:focus + .floating-label,
input:not(:placeholder-shown) + .floating-label {
  top: 0;
  left: 10px;
  font-size: 14px;
  color: #5c6bc0;
}

.input-error {
  border-color: #e74c3c;
  background-color: #fbe9e7;
}

.btn-login {
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

.btn-login:hover {
  background-color: #4e5ba6;
  transform: translateY(-5px);
}

.btn-login:disabled {
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

.register-container {
  margin-top: 20px;
}

.btn-register {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #2ecc71;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-register:hover {
  background-color: #27ae60;
}

@media (max-width: 480px) {
  .login-box {
    padding: 20px;
  }

  input {
    padding: 12px;
  }

  h2 {
    font-size: 22px;
  }
}
</style>
