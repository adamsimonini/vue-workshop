<template>
  <div @mouseover="mouseover" class="sources">
      <p><span>Further reading: </span><a :href='url' target='_blank'>{{url}}</a></p>
  </div>
</template>

<script>
export default {
  name: 'Sources',
  components: {
  },
  props: {
    url: String,
  },
  methods: {
    mouseover: function () {
        // let data = 'HERE YOU GO PARENT!' + this.url + '**ToParentFromChild**'
        // this.$emit('passURL', data)
    }
  }
}
</script>

<style scoped>
.sources{
    border-top: 1px solid #42b983;
    margin-top: 20px;
    background-color: unset;
}
</style>
