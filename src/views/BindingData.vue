<template>
  <div class="">
      <h2>Binding Data & Events</h2>
      <p>
          We already saw data binding in action when we changed the name of our farm. There, we did interpolation by using double curly braces to implant a javascript
          variable into our template area. As the variable changes, the content within the HTML will follow suit. It's just that simple! 
      </p>
      <p>
          To prevent this behaviour we can use the Vue directive "v-once". That directive can be put inside of the template tag hosting the bound data.
          Using v-once, once the variable provides a value to the template, the binding stops, and no further updates will be represented.
      </p>
      <h3>Two-way binding</h3>
      <p>
          We can use Vue directives to do many things, one of which is two-way binding of an input, like follows:
      </p>
      <h4>Two way binding of text box: {{userInput}}</h4>
      <h4>Two way binding of text box (again): {{userInput}}</h4>
      <input v-model="userInput"/>
      <h4>Two way binding of text box: {{checkbox}}</h4>
      <input type="checkbox" v-model="checkbox"/>
      <h3>Directives and Events</h3>
      <p>
          Vue directives are syntax we add to the template area, which enables that template area to become dynamic in some way. In other words, you can expect 
          "javascripty stuff" to be happening when using "v-"
      </p>
      <p>
          We can use Vue directives to add event listeners. For that, we'll use "v-on:" plus the event listener's name. For example "v-on:click=harvest" 
          (or "@click=harvest" for the short form). We made the click equal "harvest", so in our script area, we need to define the function "harvest". We will do that
          under "methods"
      </p>
      <button v-on:click='harvest'>Harvest Now</button>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  data: function () {
    return {
        userInput: '',
        checkbox: false
    }
  },
  methods: {
      harvest: function() {
          alert('Alert: harvester powered on!')
      }
  }
}
</script>

<style scoped>
</style>
