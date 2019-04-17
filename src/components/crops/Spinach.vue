<template>
  <div class="crop spinach">
      <img v-on:click='harvest' v-bind:src='image' />
  </div>
</template>

<script>
export default {
  name: 'Spinach',
  components: {
  },
  data: function() {
    return {
        image: '/farm-images/004-spinach.png',
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
