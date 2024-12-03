<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<!-- <template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading></template>

    
    <a href="https://vuejs.org/" target="_blank" rel="noopener"></a>
   
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template> -->

<template>
   <section class="welcome-section">
    <div class="imgs">
        <img src="/img/steel-pipelines-cables-plant (1).jpg" alt="Pipelines">
        <div class="overlay">
        </div>
    </div>


    <div class="container">
      <h1>Bienvenido al Sistema de Gestión de Agua Inteligente</h1>
      <p>Nuestro sistema automatizado y basado en Arduino optimiza la distribución y el uso eficiente del recurso hídrico, adaptándose a las condiciones cambiantes y reduciendo el desperdicio de agua.</p>
      <div class="services-grid">
        <div class="service-item">
          <img src="/img/valvula.png" alt="Control de Válvulas">
          <h3>Control de Válvulas</h3>
          <p>Programa horarios de apertura y cierre de válvulas para una distribución precisa del agua.</p>
        </div>
        <div class="service-item">
          <img src="/img/sensor.png" alt="Sensores y Actuadores">
          <h3>Sensores y Actuadores</h3>
          <p>Integra sensores y actuadores para adaptarse a las condiciones cambiantes y automatizar procesos.</p>
        </div>
        <div class="service-item">
          <img src="/img/fugas.png" alt="Detección de Fugas">
          <h3>Detección de Fugas</h3>
          <p>Monitorea el sistema y detecta tempranamente fugas o anomalías para una gestión más eficiente.</p>
        </div>
        <div class="service-item">
          <img src="/img/sostenibilidad.png" alt="Sostenibilidad">
          <h3>Sostenibilidad</h3>
          <p>Contribuye a la sostenibilidad ambiental al optimizar el uso del recurso hídrico.</p>
        </div>
      </div>
    </div>
  </section>
</template>

