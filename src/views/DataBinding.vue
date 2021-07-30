<template>
	<div class="">
		<h2>Binding Data & Events</h2>
		<p>
			We already saw data binding in action when we changed the name of our farm. There, we did interpolation by using double curly braces to implant a javascript variable into our template area. As the variable changes, the content within the HTML will follow suit. It's just that simple!
		</p>
		<Editor v-model="miniOne" lang="javascript" width="500" height="100" />
		<p><span class="challenge">Mini Challenge 1: </span>in the above IDE, if we change the value of someVariable to 'chicken', What will be displayed in the p tag?</p>
		<h3>Data binding</h3>
		<p>
			We can use Vue directives to do many things, one of which is binding of an input, as follows:
		</p>
		<h4>
			Data binding of text box: <span>{{ userInput }}</span>
		</h4>
		<h4>
			Data binding of text box (again): <span>{{ userInput }}</span>
		</h4>
		<v-flex xs12 sm6 md3>
			<v-text-field v-model="userInput" color="#2E7D32"></v-text-field>
		</v-flex>
		<h4>Two way binding of text box: {{ checkbox }}</h4>
		<v-checkbox v-model="checkbox" color="#2E7D32"> </v-checkbox>
		<Editor v-model="miniTwo" lang="javascript" width="500" height="120" />
		<p><span class="challenge">Mini Challenge 2: </span> in the above IDE, if we make it so that the p tag has "default" as its default text. What do you think will happen if the user modifies the input value?</p>

		<h3>Directives and Events</h3>
		<p>
			Vue directives are syntax we add to the template area, which enables that template area to become dynamic in some way. In other words, you can expect "javascripty stuff" to be happening when using "v-"
		</p>
		<p>
			We can use Vue directives to add event listeners. For that, we'll use v-on: + event listener's name = function to be triggered by the event. For example, "v-on:click=harvest" (or "@click=harvest" for the short form). That code made the click trigger "harvest". Now we need to define harvest. We can do that in the script area of our file, within the export object. Add a "methods" property to the export object, and define your function in there. Check the code on this page and make sure you understand what is going on with the click event. It's important for the next challenge.
		</p>
		<Editor v-model="miniThree" lang="javascript" width="500" height="120" />
		<p><span class="challenge">Mini Challenge 3: </span> in the above IDE, how would we make the second button also transmit an alert on click?</p>

		<v-btn v-on:click="harvest">Power On Harvester</v-btn>
	</div>
</template>

<script>
export default {
	name: "DataBinding",
	components: {
		Editor: require("vue2-ace-editor")
	},
	data: function() {
		return {
			miniOne: "<p>{{ someVariable }}</p> \n\n data: function() {\n  return { \n   someValiable: 'test'\n  } \n}",
			miniTwo: "<input type='text' v-model='userInput' /> \n<p>{{ userInput }}</p> \n\n data: function() {\n  return { \n   userInput: ''\n  } \n}",
			miniThree: "<button @click='sendAlert'></button> \n<button></button>  \n\nmethods: { \n sendAlert: function() {\n   alert('you clicked me') \n } \n}",
			userInput: "",
			checkbox: true
		};
	},
	methods: {
		editorInit: function() {
			require("brace/ext/language_tools"); //language extension prerequsite...
			require("brace/mode/html");
			require("brace/mode/javascript"); //language
			require("brace/mode/less");
			require("brace/theme/chrome");
			require("brace/snippets/javascript"); //snippet
		},
		harvest: function() {
			alert("Alert: harvester powered on!");
		}
	}
};
</script>

<style scoped>
h4 span {
	color: #2e7d32;
}
</style>
