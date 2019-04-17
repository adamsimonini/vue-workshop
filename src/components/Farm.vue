<template>
  <div class="farm">
      <h3>Welcome to {{yourName}}'s farm! <img class='barn' src="../assets/farm-images/001-barn.png"/></h3>
      <div class='products'>
        <div class='crops'>
   
        </div>
        <div class='livestock'>

        </div>
      </div>
  </div>
</template>

<script>
import Carrots from './crops/Carrots.vue'
export default {
  name: 'Farm',
  components: {
      Carrots
  },
  data: function() {
    return {
        yourName: '(your name)'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.farm {
    border-top: solid 1px#42b983;
    margin-bottom: 20px;
}
h3 {
    font-size: 26px;
    text-align: center;
}
.crops {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}
.crops > div {
    margin: 0 10px;
}
.barn {
    max-width: 50px;
}
.products {
    border: 1px solid red;
    -webkit-box-shadow: 2px 1px 18px -6px rgba(235,0,86,1);
    -moz-box-shadow: 2px 1px 18px -6px rgba(235,0,86,1);
    box-shadow: 2px 1px 18px -6px rgba(235,0,86,1);
    min-height: 100px;
}
</style>

<style>
/* global styles for our farm */
.crop img {
    max-width: 100px;
}
img {
    max-width: 100%;
}
</style>
