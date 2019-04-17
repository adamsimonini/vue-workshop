<template>
  <div class="">
      <h2>Binding Data</h2>
      <p>
          We already saw data binding in action when we changed the name of our farm. There, we did interpolation by using double curly braces to implant a javascript
          variable into our template area. As the variable changes, the content within the HTML will follow suit. It's just that simple! 
      </p>
      <p>
          To prevent this behaviour we can use the Vue directive (more on those later) v-once. That directive can be put inside of the template tag hosting the bound data.
          Using v-once, once the variable provides a value to the template, the binding stops, and no further updates will be represented.
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
