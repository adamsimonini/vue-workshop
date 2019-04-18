<template>
  <div class="">
      <h2>Routing</h2>
      <p>
          Today's lesson is just about over, but there is one more item of interest. Have you noticed that we could flip through content from the agenda without reloading the page? That works with Vue's router. It doesn't
          come natively in Vue.js, but is a common and very popular addon. Checkout router.js. There, I have imported most of the page components
          (the components located in the "views" folder). I then specify what compoent should show up on which 'route', where the route is a string. When the url matches that route,
          the router flips to that component. Then, in the "Agenda.vue" file, I have a router-link that passes in the approprite route for each item.
      </p>
      <img src="../assets/routing.jpg" />
      <p>
          Try making your own component in the "views" folder. Then, import it to "router.js" and define it there. Then, in "Agenda.vue", add your route in a new agenda item.
          You can add your Farm to this new page you build by importing "Farm.vue" into that page. Look at the code behind any of the challenges to see how this works.
      </p>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  }
}
</script>

<style scoped>
</style>
