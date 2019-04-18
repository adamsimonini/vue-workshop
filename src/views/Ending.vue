<template>
  <div class="end">
    <h2>The End</h2>
    <p>
        The long winter was tough, but the good people of Winterfell have been well-fed thanks to your efforts! You also made some good profit - not bad for a rookie!
    </p>
    <p>
        There were a few more topics and story ideas I wished to go over, but I ran out of time. Nonetheless, I hope enjoyed this workshop, and thank you for your participation!
    </p>
    <Farm />
  </div>
</template>

<script>
import Farm from '../components/Farm.vue'
export default {
  name: 'End',
  data: function () {
   return {
     selected: ''
   }
  },
  components: {
    Farm
  }
}
</script>

<style scoped>
</style>
