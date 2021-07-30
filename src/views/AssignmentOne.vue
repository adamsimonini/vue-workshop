<template>
	<div class="assignment-one">
		<h2>Challenge One: Let's plant some crops</h2>
		<p>
			Below is your farm! Congratulations, you've been promoted (or demoted, depending on how you look at it)... In any case, it's time to roll up your sleves. The demand for carrots is currently sky high, so let's plant some.
		</p>
		<p>Change your farm's name by changing the appropriate string within the "Farm" component, found here: <span class="path">src/components/Farm.vue</span></p>
		<p>
			You can find the "Carrot" component in the "crops" folder, inside the "components" folder. Use what you learned from the last slide to import "Carrot", and display it. You only need to uncomment the lines of code for this challenge, so it's no big deal!
		</p>
		<p><b>Step 2:</b> We need a lot of carrots, so try planting many carrots. (I planted four, but you might be a more keen farmer than I.) Your results should look similar to this:</p>
		<v-btn v-if="!stepTwo" v-on:click="toStepTwo()">Continue to Step 2</v-btn>
		<div v-if="stepTwo">
			<h3>Example from my solution:</h3>
			<img src="../assets/farmExamples/carrotRow.jpg" />
			<p>
				Don't stop there! I hear the citizens of our neighbouring metropolis (Winterfell) are fickle eaters, with various tastes. Take a peak inside of the "farm-images" folder, add one more crop to your farm's "crops" area, and add two animals to your "livestock" area.
				<b>Hint: you can simply copy & paste the "Carrot" component from earlier, and then swap out the relevant names and images.</b>
			</p>
		</div>
		<Farm />
	</div>
</template>

<script>
import Farm from "../components/Farm.vue";
export default {
	name: "AssignmentOne",
	components: {
		Farm
	},
	data() {
		return {
			stepTwo: false
		};
	},
	methods: {
		toStepTwo() {
			this.stepTwo = true;
		}
	}
};
</script>

<style scoped></style>
