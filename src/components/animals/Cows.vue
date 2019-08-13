<template>
  <div class="cows livestock">
      <img v-on:click.once='harvest' v-bind:src='image' />
  </div>
</template>

<script>
export default {
  name: 'Cows',
  components: {
  },
  data: function() {
    return {
      image: "/farm-images/cow.png",
    }
  },
  methods: {
    harvest() {
      this.image = "/farm-images/steak.png";
      this.$emit('harvested', 'cow');
    },
  }
}
</script>

<style scoped>
</style>
