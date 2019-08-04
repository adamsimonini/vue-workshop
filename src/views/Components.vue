<template>
  <div>
      <h2>Components & How To Use Them</h2>
      <p>
          With Vue.js (and React & Angular), developers can create components (i.e., reusable chunks of code). Components are imported via modern javascript: 
          <u>import ComponentName from './location-of-component.vue'</u>
      </p>
      <p>
          Take a look at "src\views\WhyVue.vue", at line 44 you can find the following:
      </p>
      <img src="../assets/importing-components.jpg"/>
      <p>
          At the top of the image we have an "HTML" tag called "< Soruces... >", then we see an import statement of "Sources", and finally within the export statement we also 
          see "Sources". What do you think is happening here?
      </p>
      <button v-on:click='questionAnswered'>Continue</button>
      <div v-if=this.continue>
          <p>
              Vue.js allows us to create our own tags, and use them quite like legitimate HTML tags! All we have to do is tell the page (or parent component) making the call
              to this new component where this new component exists within our project. Try removing the import statement and saving. What happens?
          </p>
          <p>
              We also need to explicitly tell the page or parent component to export this child component.
              Try removing "Sources" from within "components: { }" on this page. What happens? (You will have to click continue again due to hot-reloading)
          </p>
          <p>
              Now try going into Sources.vue and changing the background-color from "unset" to "orange" (or any other color). 
              Notice how all pages using the "Sources" component receive your change.
          </p>
      </div>
      <Sources url="https://vuejs.org/v2/guide/components.html" />
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
export default {
  name: '',
  components: {
      Sources
  },
  data: function() {
    return {
        continue: false
    }
  },
  methods: {
      questionAnswered: function() {
          this.continue = true
      }
  }
}
</script>

<style scoped>
</style>
