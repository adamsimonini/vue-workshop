<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Agenda from '@/components/Agenda.vue'

export default {
  name: 'home',
  components: {
    Agenda
  }
}
</script>

<style scoped>

</style>
