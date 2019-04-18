<template>
  <div class="farm">
      <h3>Welcome to {{yourName}}'s farm! <img class='barn' src="/farm-images/001-barn.png"/></h3>
      <div class='products'>
        <div v-for="(crops) in 1" :key=crops class='crop-row'>
            <Carrots :geneticallyModify='true' v-on:harvested="addProfits"/>
            <Spinach v-on:harvested="addProfits"/>
            <Spinach v-on:harvested="addProfits"/>
            <Carrots v-on:harvested="addProfits"/>
        </div>
        <div v-for="(livestock, index) in 1" :key=index class='livestock-row'>
            <Cows />
            <Cows />
            <Chickens :geneticallyModify='true'/>
            <Chickens />
        </div>
      </div>
      <div class="numbers-row">
          <span>Gold coins generated: {{profit}}</span>
      </div>
  </div>
</template>

<script>
import Carrots from './crops/Carrots.vue'
import Spinach from './crops/Spinach.vue'
import Cows from './animals/Cows.vue'
import Chickens from './animals/Chickens.vue'
export default {
  name: 'Farm',
  components: {
      Carrots,
      Cows,
      Chickens,
      Spinach,
  },
  data: function() {
    return {
        yourName: 'Adam',
        profit: 0,
    }
  },
  methods: {
      addProfits: function (product) {
          if (product == 'carrots') {
              this.profit += 2
          } else if (product == 'spinach') {
              this.profit += 3
          } else if (product == 'wheat'){
              this.profit += 4
          }
      }
    },
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
    display: flex;
    align-items: center;
    justify-content: center;
}
.crop-row, .livestock-row, .numbers-row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 15px 0;
}
.crop:hover {
    cursor: pointer;
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
    border-radius: 20px;
}
</style>

<style>
/* global styles for our farm */
.crop img {
    width: 100px;
}
.livestock img {
    width: 70px;
    max-width: 110px;
}
img {
    max-width: 100%;
}
.genetidMod {
    width: 150px !important;
}
</style>
