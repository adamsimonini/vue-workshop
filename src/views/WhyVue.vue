<template>
  <div class="">
      <h2>What Is Vue, & Why Should I Care?</h2>
      <img src="../assets/DOM.png" />
      <p>
          The DOM (document object model) is a tree data structure used to create an HTML page by the browser. It lays out the connections between elements. Modern webpages are quite complicated, and since the DOM is a data structure the resulting data structure is complicated, consisting of potentially thousands of nodes.
          Changing the DOM itself requires a call to a DOM API method (e.g., .getElementById), which was never intended for modern web behaviour where udates are frequent.
          Consequently, manipulating the DOM in real-time on the client's browser is inefficient, especially for frequent updates (e.g., scrolling down an extremely long data grid,
          where the rows are created dynamically as the user scrolls). 
      </p>
      <p>
          The virtual-DOM, or v-DOM, is used by both React & Vue to address this problem. It is a relatively lightweight javascript representation of the DOM. Changes are noted
          on this JSON object, and the DOM is synchronized with the v-DOM by an efficient updaing function. Beyond performance, new opportunities arise. Because everything is
          being done in Javascript, having elements update each other, and displaying those changes to the user, is more simple to code. It's baked right in! 
      </p>
      <img src="../assets/learning_curve.png" />
      <Sources url="https://medium.com/js-dojo/whats-the-deal-with-vue-s-virtual-dom-3ed4fc0dbb20" />
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
export default {
  name: '',
    components: {
      Sources,
  },
}
</script>

<style scoped>
</style>
