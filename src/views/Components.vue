<template>
  <div>
      <h2>Components & How To Use Them</h2>
      <p>
          With Vue.js (and React & Angular), developers can create components (i.e., reusable chunks of code). Components are imported via modern javascript: 
          <u>import ComponentName from './location-of-component.vue'</u>
      </p>
      <p>
          Take a look at <span class="path">"src\views\WhyVue.vue"</span>. At line 44 you can find the following:
      </p>
      <img src="../assets/importing-components.jpg"/>
      <p>
          QUESTION: In the above image, we have an "HTML" tag called "< Sources... >", we then see an import statement of "Sources", and finally within the export statement we also 
          see "Sources". What do you think is happening here?
      </p>
      <v-btn v-if=!this.continue v-on:click='questionAnswered'>See Answer</v-btn>
      <div v-if=this.continue>
          <p>
              Vue.js allows us to create our own tags, and use them quite like legitimate HTML tags! All we have to do is tell the page (or parent component) making the call
              to this new component where this new component exists within our project. Try removing the import statement and saving. What happens?
          </p>
          <p>
              We also need to explicitly tell the page or parent component to export this child component.
              Try removing "Sources" from within "components: { }" on this page. What happens? (You may have to click "See Answer" again due to hot-reloading.)
          </p>
          <p>
              Now go to Sources.vue (location: <span class="path">src/components/Sources.vue</span>) and change the border-color from to "orange" (or any other color). 
              All pages in this project that use the "Sources" component receive your colour change (e.g., Challenge Four). Also note that, via under the hood webpack configurations,
              the "@" symbol in a pathing name equals "src".
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
