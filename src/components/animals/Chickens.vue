<template>
  <div class="chickens livestock">
      <img v-bind:class="{genetidMod: geneticallyModify}" src="@/assets/farm-images/014-chicken.png" />
  </div>
</template>

<script>
export default {
  name: 'Chickens',
  components: {
  },
  data: function() {
    return {
    }
  },
  methods: {
  },
  props: {
    geneticallyModify: Boolean,
  }
}
</script>

<style scoped>
</style>
