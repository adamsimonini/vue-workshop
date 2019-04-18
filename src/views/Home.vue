<template>
  <div class="home">
      <h2>Welcome to this Vue.js workshop!</h2>
      <P>
          My goal here is to give you a hands-on, practical, and fun workshop on some core ideas in Vue.js. Here are some important links:
      </P>
      <ul>
          <li>The stand-alone webapp, for reference: <a href="https://github.com/adamsimonini/vue-workshop">https://github.com/adamsimonini/vue-workshop</a></li>
          <li>The completed project for reference if you get stuck: <a href="https://github.com/adamsimonini/vue-workshop">https://github.com/adamsimonini/vue-workshop</a></li>
      </ul>
      <img src="../assets/farm-flat.jpg" />
  </div>
</template>

<script>
// @ is an alias to /src
import Agenda from '@/components/Agenda.vue'

export default {
  name: 'home',
  components: {
    Agenda
  }
}
</script>

<style scoped>

</style>
