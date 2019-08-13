<template>
  <div class="chickens livestock">
      <img v-on:click.once='harvest' v-bind:class="{genetidMod: geneticallyModify}" :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Chickens',
  components: {
  },
  data: function() {
    return {
      image: "/farm-images/chicken.png"
    }
  },
  methods: {
    harvest() {
      this.image = "/farm-images/chicken-breast.png";
      this.$emit('harvested', 'chicken');
    },
  },
  props: {
    geneticallyModify: Boolean,
  }
}
</script>

<style scoped>
</style>
