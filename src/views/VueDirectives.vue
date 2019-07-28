<template>
  <div class="directives">
      <h2>Vue Directives (for & show)</h2>
      <p>
          We're going to go on break soon, just one more lesson and challenge! We're doing great.
      </p>
      <p>
          We already saw directives before. It's that "v-" syntax. They allow us to specify DOM modification behaviour right in the template area. Let's focus on "v-show" & "v-for"
      </p>
      <h3>V-Show</h3>
      <p>
         V-show responds to a boolean value. It's either true (and consequently show) or not true (and consequently hide). You can also use the "!" indicator to revese swap when 
         showing and hiding is true. The simplest way to use "v-show" is to specify the boolean right in the code, though it's not very useful. Take a look at the code behind this page,
         and change the first Farm elemet's v-show value to "true", and then back to "false"
      </p>
      <Farm v-show="false" />
      <p>
        The second Farm element is a bit different. We should be familiar with it by now. What is different and why is that difference significant?
      </p>
      <button @click="toggleFarm">Show/Hide Farm</button>
      <Farm v-show='showFarm'/>
      <h3>V-For</h3>
      <p>
        This is a very neat directive. You can create a for-loop directly into your template, and bind various values to the template, while utilizing the index for organization.
        For loops done this way require a "key", which is usually bound to the index. The key is used as an identifier for the generated item, so that Vue.js can keep track of them.
      </p>
      <h4>Number</h4>
      <div v-for='item in 3' :key=item>
          <p>{{item}}</p>
      </div>
      <p>
        The most simple instances of v-for uses a number to identify how many loops must be completed, as seen above
      </p>
      <h4>Array</h4>
      <div v-for='(item, index) in inventory' :key=item>
          <p>{{index + 1}} {{item}}</p>
      </div>
      <h4>Array of objects</h4>
        <div id="majorCities">
            <div class="countries" v-for="location in locations" v-bind:key="location.id">
                <span class="countryName">{{location.country}}</span>
                <div class="cityList">
                    <span class="cityName" v-for="(majorCity, i) in location.majorCities" v-bind:key="majorCity.id">{{i + 1}}. {{majorCity}} <span v-html="medal[i]"></span></span>
                </div>
                <!-- v-binding style causes the style to become jabascript that accepts two parameters ('style to be changed', 'value of the change') -->
            </div>
        </div>
  </div>
</template>

<script>
import Farm from '../components/Farm.vue'
export default {
  name: 'Directives',
  components: {
      Farm,
  },
  data: function () {
    return {
        showFarm: false,
        inventory: ['tomatoes', 'rice', 'corn', 'cabbage', 'eggs', 'cheese'],
        locations: [
            {   
                country: 'Canada',
                majorCities: ['Toronto', 'Montreal', 'Vancouver']
            },
            {   
                country: 'Mexico',
                majorCities: ['Mexico City', 'Ecatepec', 'Guadalajara']
            },
            {   
                country: 'USA',
                majorCities: ['New York', 'Los Angeles', 'Chicago']
            },
        ],
        medal: ['&#x1f947;', '&#x1f948', '&#x1f949'],
    }
  },
  methods: {
      toggleFarm: function () {
          this.showFarm === false ? this.showFarm = true : this.showFarm = false
      }
  }
}
</script>

<style scoped>
.cityList{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f9f9f9;
}
.countryName{
    font-weight: 900;
}
</style>
