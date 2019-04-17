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
          It looks like this: < div onclick='alert("Backoff! Get your own sandwich!")' style='color: red;' >< /div>
      </p>
      <p>
          In Vue.js, we can create our own attributes, call them anything we like, and give them any value we want. We can hard code the value, but more interestingly we can bind
          the value of our custom attribute to a variable, so that the child changes as the data from the parent changes. The important part is that we can let the child receive
          this data!
      </p>
      <img src="../assets/parentChild.png" />
      <p>
          The image above describes a parent-child relationship. The parent can pass down data to the child, and the child can also react to events and inform the parent of its state
          by emitting events. (We'll talk about emitting events soon, but not now.) 
      </p>
       <p>
           In other words, the parent describes some data, and it passes that data to the child. The child receives that data as "props". The child can also have variables bound to
           the props passed in. In this case, a change in data from the parent can directly change data of the child. Take a look at the following:
      </p>
  </div>
</template>

<script>

export default {
  name: 'Props',
  components: {
  }
}
</script>

<style scoped>
</style>
