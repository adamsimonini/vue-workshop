<template>
  <div class="assignment-three">
    <h2>Challenge Three: We're growing quick!</h2>
    <p>
        Your sales are really picking up - more than you anticipated. We need to plant more crops and raise more livestock, and fast! Apply a v-for loop to the crop-row, and to the 
        livestock-row. Make them different numbers. You're no rookie farmer at this point, so I'll let you decide if you need more crops than livestock, or vice versa.
    </p>
    <p>
        If you need to stock up on a single crop, try adding a for loop into the individual crop's template tag.
    </p>
    <img src="../assets/farmExamples/growingFarm.jpg"/>
    <Farm />
  </div>
</template>

<script>
import Farm from '../components/Farm.vue'
export default {
  name: 'AssignmentTwo',
  components: {
    Farm
  }
}
</script>

<style scoped>
</style>
