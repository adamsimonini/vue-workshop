<template>
  <div class="crop spinach">
      <img v-on:click.once='harvest' v-bind:src='image' />
  </div>
</template>

<script>
export default {
  name: 'Spinach',
  components: {
  },
  data: function() {
    return {
        image: '/farm-images/spinach.png',
    }
  },
  methods: {
      harvest: function() {
          this.image = '/farm-images/sprouts.png'
          this.$emit('harvested', 'spinach')
      }
  }
}
</script>

<style scoped>
</style>
