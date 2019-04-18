<template>
  <div class="">
      <h2>Passing Props</h2>
      <p>
        Have you noticed that our components are quite seperate? The farm has its own template and data, and each product (crop & livestock) has its own template and data. In this case,
        your Farm is the parent component for both your crops and your livestock (i.e., Farm's children). So far we haven't passed data between parents and children - how boring! Let's
        learn how to do that now.
      </p>
      <p>
          An HTML attribute resides within a tag. For example with "onclick=function()", the attribute is "onclick". With "style=color: red;", the attribute is "style".
          It looks like this:
          <img src="../assets/attribute-example.jpg" />
      </p>
      <p>
          In Vue.js, we can create our own attributes, call them anything we like, and give them any value we want. We can hard code the value, but more interestingly we can bind
          the value of our custom attribute to a variable, so that the child changes as the data from the parent changes. The important part is that we can let the child receive
          this data! Note: binding is a v- directive, which means something to do with javascript if you remember. So whereas we don't need to bind thge string "false" as a prop,
          we would need to bind the bool false, or a number. Why is this the case?
      </p>
      <img src="../assets/parentChild.png" />
      <p>
          The image above describes a parent-child relationship. The parent can pass down data to the child, and the child can also react to events and inform the parent of its state
          by emitting events. (We'll talk about emitting events soon, but not now.) 
      </p>
       <p>
        In other words, the parent describes some data, and it passes that data to the child. The child receives that data as part of its "props" object. Take a look at the 
        "Sources.vue" file found in the "components" folder. It has a "props" object, with a property called "url". We might say "Sources has a property called url". Now look at the 
        instantiation of the "Sources" tag on the "WhyVue.vue" page. That instance has an attribute "url", which is being passed a string. Our "Sources.vue" file expects a prop called "url" 
        to be passed to it, and we are binding the href to that value, as well as the text displayed within the anchor tag.
      </p>
      <p>
        Finally, take a peak at "Sources" component on this page. Here, I have bound its value to the variable "selected", and the variable "selected" models 
        the value of the select element. (You can see more examples of v-model back on <router-link to="/binding-data">BindingData.vue</router-link>)

      </p>
    <Sources v-bind:url="selected"/>
    <select v-model="selected">
      <option disabled value="">Select a source</option>
      <option value="https://vuejs.org/v2/guide/components-props.html">vuejs.org</option>
      <option value="https://flaviocopes.com/vue-props/">flaviocopes.com</option>
      <option value="https://css-tricks.com/intro-to-vue-2-components-props-slots/">css-trinks</option>
      <option value="https://stackoverflow.com/questions/33616772/understanding-props-in-vue-js">stackoverflow</option>
    </select>
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
export default {
  name: 'Props',
  data: function () {
   return {
     selected: ''
   }
  },
  components: {
    Sources
  }
}
</script>

<style scoped>
</style>
