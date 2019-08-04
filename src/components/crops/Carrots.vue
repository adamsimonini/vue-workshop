<template>
  <div class="crop carrots">
      <img v-bind:class="{genetidMod: geneticallyModify}" v-on:click.once='harvest' v-bind:src='image' />
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
          this.$emit('harvested', 'carrots')
      }
  },
  props: {
    geneticallyModify: Boolean,
  }
}
</script>

<style scoped>
</style>
