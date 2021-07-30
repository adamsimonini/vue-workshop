<template>
  <div class="emitting">
      <h2>Custom Event Listeners With $emit</h2>
      <p>
          Last lesson we learned about parents passing data down into children via props. Quite like javascript functions, there is scoping going on. The inner function has access
          to the outer functions data, but the outer function does not automatically have access to the inner one. This is the same in Vue.js with the parent/child dynamic.
          Children can easy access changes to the parent component's state through props. However, altering the state of the child and bubbling up that change to the parent is a bit more explicit & cumbersome.
      </p>
      <img src="../assets/parentChild.png" />
      <p>
          <ol>
              <b>Child Part</b>
              <li>The child is set to react to an event on it (specified in the template area, which the image doesn't show)</li>
              <li>The function in the child is called, which in the picture is "handleClick"</li>
              <li>"handleClick" results in an emit statement: "this.$emit('functionParentListensFor)'"</li>
              <b>Parent Part</b>
              <li>The parent is set to listen for the custom event (which in this case is "clickedSomething")</li>
              <li>When the parent detects "clickedSomething", it runs its own function in response (which in this case is called "handleClickInParent")</li>
              <li>"handleClickInParent" is defined in the parent's methods, and runs its code</li>
          </ol>
      </p>
      <img src="../assets/emit.jpg" />
      <p>
          Checkout "Sources.vue" again, to see steps 1-3. Revert the commenting on lines 17 & 18. On mouseover "Sources.vue" emits an event and passes the value of it's url. 
          Now checkout this page (Emitting.vue) to see steps 4-6. The instance of "Sources" on this page (which you can see directly in the code below) listens for the event "passURL", 
          and it triggers a function on this page (the parent page). That function simply logs the url plus a little extra message added from the child. Success! The parent has received data from the child.
      </p>
      <p>
          However, if you go to other pages with the "Sources" component, there is no logged message precisely because the "Sources" component on those other pages aren't listening for the emitted event. What are they missing?
      </p>
      <Sources v-on:passURL="handleURL" url="https://flaviocopes.com/vue-components-communication/#events-to-communicate-from-children-to-parent" />
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
let index = 1;

export default {
  name: 'Emitting',
  components: {
      Sources,
  },
  methods: {
      handleURL: function (url) {
          console.log('%c' + index + ' ' + url, "color: #42b883;");
          index++;
      }
  }
}
</script>

<style scoped>
li:nth-of-type(odd) {
    background-color: #e6e6e6;
}
</style>
