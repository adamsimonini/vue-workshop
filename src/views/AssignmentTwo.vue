<template>
  <div class="assignment-two">
    <h2>Challenge Two: Harvest our crops</h2>
    <p>
        While you were learning, your crops were growing! That's a win-win situation! We turned on the harvester last lesson, so now it's time to roll up our sleves 
        and harvest our crops.
    </p>
    <h3>1) Bind the image src property to a variable</h3>
    <p>
        What we want is for a click on one of our crops to translate into an image change. We want to change the image of the given crop to the "sprouts" image when clicked. 
        Let's go back to each of our crop components, but this time instead of hard-coding the image source directly into the image tag, 
        let's make it dynamic by <b>binding</b> the image path to a string returned by the data() function. A successful implementaton will mean that manually changing the image variable
        in your code will cause the image to change in the browser.
    </p>
    <p>
        Note: due to webpack, dynamic images are a bit tricky. I have placed a copy of all the images into the "public" folder. 
        So, the path for all image resource should be changed to look like this: '/farm-images/050-carrots.png'
    </p>

    <div v-if='true'>
    <h3>2) Add a harvest function to each crop, to flip the image on click</h3>
    <img src="../assets/farmExamples/harvestedCrops.jpg"/>
        <p>
            After you are done binding the image src to a javascript string, you can then bind a click event to the given crop's image tag. Try adding 'v-on:click="harvest"', and then 
            creating a "harvest" function in the "methods" area of the component (of the crop). The harvest method should change the image string to "'/farm-images/002-sprouts.png'".
            <b>Note: the component's methods only have access to variables described in "data()" by using the "this" keyword. So for example, the method must say "this.image = ...".</b>
        </p>
        <p>
            (BONUS: If you have extra time, find an image of a steak, throw it into the project, and make the cow turn into it when clicked)
        </p>
    </div>
    <Farm />
  </div>
</template>

<script>
import Farm from '../components/Farm.vue'
export default {
  name: 'AssignmentTwo',
  components: {
    Farm
  }
}
</script>

<style scoped>
</style>
