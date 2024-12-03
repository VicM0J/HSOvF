<template>
  <div>
  

    <div class="menu">
      <img src="/img/HSO.jpg" alt="Logo" class="logo">
      <nav>
        <RouterLink to="/"><img src="/img/inicio.png" ></RouterLink>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/descargar">Consigue Nuestra App</RouterLink>
        <RouterLink to="/about">Sobre Nosotros</RouterLink>
        <RouterLink to="/contacto">Contactanos</RouterLink>
        <RouterLink to="/buy" class="button">Obtener Servicio</RouterLink>
        <RouterLink to="/login" class="button">Inicio Sesión</RouterLink>

      </nav>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HeaderMenu',
  components: {
    RouterLink
  }
}
</script>




