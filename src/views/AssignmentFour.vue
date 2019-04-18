<template>
  <div class="assignment-two">
    <h2>Challenge Four: Genetic Modification</h2>
    <p>
      The long winter is upon winterfell, and its people are hungry. If they're to survive the long night, we'll need to make super crops: resiliant to cold with twice the yield!
      We might also want to genetically modify the animals, too. I'll leave it to your discretion.
    </p>
    <p>
      In your Farm component, there is a CSS rule called "genetidMod", which makes the images larger. Let's apply it to at least two of our products 
      (crops or animals). There are three steps to this:
      <ol>
        <li>In your Farm.vue file, pass the prop "genetically-modify" to a few products, and bind its value to 'true'</li>
        <li>In each relevant crop/livestock component file, add the prop "geneticallyModified: Boolean" </li>
        <li>Finally, you'll want to bind the class "genetidMod" in the image tag to the value of "geneticallyModified". Instructions to do this can be found
          in the link at the bottom of this page. The syntax is v-bind:class="{ className | truthyJavascriptVariable }"</li>
      </ol>
    </p>
    <div v-if='false'>
      <h3>Example from my solution:</h3>
      <img src="../assets/geneticMod.jpg" />
    </div>
    <Farm />
    <Sources url="https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax" />
  </div>
</template>

<script>
import Sources from '@/components/Sources.vue'
import Farm from '../components/Farm.vue'
export default {
  name: 'AssignmentTwo',
  components: {
    Farm,
    Sources
  }
}
</script>

<style scoped>
</style>
