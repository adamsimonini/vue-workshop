<template>
  <div class="assignment-two">
    <h2>Challenge Five: Make Bank!</h2>
    <p>
        Your farm has been really benefiting from the genetic modifications. You're making "too much" money, if there is such a thing. It's getting hard to track profits, so lets
        automatically track the profits of our crops. Uncomment the numbers-row in Farm.vue, and the profit variable in the data section of Farm.vue.
    </p>
    <p>
        We are already listening for clicks on our crops, so step 1 from last lesson is done. We need our "harvest" method to emit a custom event, and then we need the instance to 
        listen for it. Make the event the same for all crops. However, we also want the event to pass up a string telling the parent which crop has been clicked 
        (e.g., 'carrots', 'spinach', 'wheat').
    </p>
    <p>
        Next, we want the parent to listen for this custom event. Based on what string came with the event (e.g., 'carrots', 'spinach', 'wheat'), we want the parent's function to
        add to our profit variable differently. For example, if carrots, then this.profit + 2; if spinach, then this.profit + 3; if wheat, this.profit + 3. You can write the if statement
        in Farm.vue, or you can simply pass to the parent numbers instead of a string, to be added directly to the profit variable.
    </p>
    <p>
        <b>Bonus</b> make your genetically modified crops yeild more profit when harvested 
    </p>
    <div v-if='false'>
      <h3>Example from my solution:</h3>
      <img src="../assets/geneticMod.jpg" />
    </div>
    <Farm />
  </div>
</template>

<script>
import Farm from '../components/Farm.vue'
export default {
  name: 'AssignmentTwo',
  components: {
    Farm,
  }
}
</script>

<style scoped>
</style>
