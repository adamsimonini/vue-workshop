<template>
  <div class="">
      <h2>What Is Vue, & Why Should I Care?</h2>
      <p>
          Vue.js is a Javascript framework. Frameworks like Angular, React, and Vue enable developers to
          place javascript logic into webpages in an organized, powerful, and performant way. In other words,
          with these frameworks you can get routing, event listeners, dynamic content generation, and more from 
          front-end code (and with fewer lines of code).
      </p>
      <p>
          These frameworks focus on components and state.
          <ul>
              <li><b>components</b> are re-usable bundles of code, which for our purposes will equal .vue files</li>
              <li><b>state</b> refers to the data contained within each component, and the all as a whole, at a given point in time</li>
          </ul>
      </p>
      <p>
          .vue files consist of three areas: template, script, and css, like so:
      </p>
      <img src="../assets/vue-file-example.png" />
      <p>
          .vue files are transpiled at build time into html, javascript, and css. 
      </p>
      <p>
          So you can think of Vue.js as creating a layer of abstraction from the standard browser technologies
          (Note, Vue.js can be used, and included into other web pages, without using .vue files. I will not be exmploring this today, but information can be found readily online) 
      </p>
      <h3>Why use Vue.js: a story of two DOMs</h3>
      <p>
          The DOM (document object model) is a tree data structure used to create an HTML page by the browser. It lays out the connections between elements
          (e.g., which are siblings of x , and which are children of y). jQuery is a method of manipulating the DOM without reloading the page. You can target elements,
          remove/add them, add event listeners, and so on.
      </p>
      <img src="../assets/DOM.png" />
      <p>
          Modern webpages are quite complicated, and since the DOM is a data structure the resulting data structure is complicated, consisting of potentially thousands of nodes.
          Changing the DOM itself requires a call to a DOM API method (e.g., .getElementById), which was never intended for modern web behaviour where udates are frequent.
          Consequently, manipulating the DOM in real-time on the client's browser is inefficient, especially for frequent updates (e.g., scrolling down an extremely long data grid,
          where the rows are created dynamically as the user scrolls). 
      </p>
      <p>
          The virtual-DOM, or v-DOM, is used by both React & Vue to address this problem. It is a relatively lightweight javascript representation of the DOM. Changes are noted
          on this JS object, and the DOM is synchronized with the v-DOM by an efficient updaing function. Beyond performance, new opportunities arise. Because everything is
          essentially being done in Javascript, having elements update each other, and displaying those changes to the user, is more simple to code. It's baked right in! 
      </p>
      <Sources url="https://medium.com/js-dojo/whats-the-deal-with-vue-s-virtual-dom-3ed4fc0dbb20" />
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
export default {
  name: '',
  components: {
      Sources
  }
}
</script>

<style scoped>
</style>
