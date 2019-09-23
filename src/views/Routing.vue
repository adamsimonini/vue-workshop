<template>
  <div class="">
      <h2>Routing</h2>
      <p>
          Today's lesson is just about over, but there is one more item of interest. Have you noticed that we could flip through content from the agenda without reloading the page?
          That works due to Vue's router. Routing doesn't come natively in Vue.js, but is a common and very popular addon. Checkout <span class="path">"src/router.js"</span>. 
          There, I have imported most of the page components (the components located in the "views" folder). Then, in the 'route' array, a given path is associated with 
          a given imported component. When the url matches that route, the router flips to that component. 
          Then, in the "src/App.vue" file, you can find a router-view component that simply shows whatever the router says to. (No further coding required.)
      </p>
      <img src="../assets/routing.jpg" />
      <p>
          Try making your own component in the "views" folder. Then, import it to "router.js" and add it to the "routes" array. Finally, navigated to that path in your url, 
          and see if it shows up for you.
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
