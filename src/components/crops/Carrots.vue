<template>
  <div class="crop carrots">
      <img v-on:click='harvest' v-bind:src='image' />
  </div>
</template>

<script>
export default {
  name: 'Carrots',
  components: {
  },
  data: function() {
    return {
        image: '/farm-images/050-carrots.png',
    }
  },
  methods: {
      harvest: function() {
          this.image = '/farm-images/002-sprouts.png'
      }
  }
}
</script>

<style scoped>
</style>
