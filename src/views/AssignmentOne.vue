<template>
  <div class="assignment-one">
        <h2>Assignment One: Let's Plant Some Crops</h2>
        <p>
            Below is your farm! Congratulations, you've been promoted (or demoted, depending on how you look at it)... In any case, it's time to roll up your sleves. 
            The demand for carrots is currently sky high, so let's plant some.
        </p>
        <p>Change your farm's name by changing the appropriate string within the "Farm" component, found in the "components" folder of the project</p>
        <p>
            You can find the "Carrot" component in the "crops" folder, inside the "components" folder. Use what you learned from the last slide to import "Carrot", and displaying it.
            We need a lot of carrots, so try planting many carrots. (I planted four, but you might be a more keen farmer than I.) Your results should look similar to this: 
        </p>
        <img src="../assets/farmExamples/carrotRow.jpg"/>
        <div v-if='true'>
            <p>
                But don't stop there! I hear the citizens of our neighbouring metropolis - Winterfell - are fickle eaters, with various tastes. Take a peak inside of the "farm-images" folder,
                and add "Spinach", "Wheat", and "Eggs" to your crops area, and a few animals to your "livestock" area. 
                <b>Hint: you can simply copy & paste the "Carrot" component from earlier, and then swap out the relevant names and images.</b>
            </p>
        </div>
        <Farm />
  </div>
</template>

<script>
import Farm from '../components/Farm.vue'
export default {
  name: '',
  components: {
    Farm
  }
}
</script>

<style scoped>
</style>
