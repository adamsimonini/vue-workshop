<template>
  <div class="props">
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
          this data! Note: binding is a v- directive, which means something to do with javascript if you remember. So whereas we don't need to bind the string "false" as a prop,
          we would need to bind the bool false, or a number. Why is this the case?
      </p>
      <img src="../assets/parentChild.png" />
      <p>
          The image above describes a parent-child relationship. The parent can pass down data to the child, and the child can also react to changes and inform the parent of its state
          by emitting events. (We'll talk about emitting events soon, but not now.) 
      </p>
       <p>
        In other words, the parent describes some data, and it passes that data to the child. The child receives that data as part of its "props" object. Take a look at the 
        "Sources.vue" file found in the "components" folder. It has a "props" object, with a property called "url". We might say "Sources has a property called url". Now look at the 
        instantiation of the "Sources" tag on the "WhyVue.vue" page. That instance has an attribute "url", which is being passed a string. Our "Sources.vue" file expects a prop called "url" 
        to be passed to it, and we are binding the href to that value, as well as the text displayed within the anchor tag. So, the "Sources" component itself doesn't explicitly state where the
        href leads to. Rather, it always needs to be handed that value by the parent.
      </p>
      <img src="../assets/propsExample.png" />
      <p>
        Bonus: take a peak at the "Sources" component on this page. Here, there is an instance of "Sources" in the template area. However, instead of hard-coding the value of Sources' url,
        I have instead bound it to the value of "selected", which in turn models the value of the selected item in the "v-select" component. This is an example of passing data between
        components, and of being reactive, with very little developmental overhead. I had to do very little hear to get a lot of javascript to happen.
        (You can see more examples of v-model back on <router-link to="/binding-data">BindingData.vue</router-link>)

      </p>
    <Sources v-bind:url="selected"/>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            color="#2E7D32"
            v-model="selected"
            :items="items"
            label="Select an article for further reading"
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
export default {
  name: 'Props',
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
  },
  data: function () {
   return {
     selected: '',
     items: [
              'https://vuejs.org/v2/guide/components-props.html', 
              'https://flaviocopes.com/vue-props/', 
              'https://css-tricks.com/intro-to-vue-2-components-props-slots/',
              'https://stackoverflow.com/questions/33616772/understanding-props-in-vue-js'
            ],
   }
  },
  components: {
    Sources
  }
}
</script>

<style scoped>
</style>
