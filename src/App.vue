<template>
  <div id="app">
    <span class="header">
        <div></div>
        <h1>Welcome to Vue.js, Advanced! <img class="vue-logo" alt="Vue logo" src="./assets/logo.png"></h1>
        <div></div>
    </span>
    <Agenda class='nav'/>
    <router-view class='main'/>
  </div>
</template>

<script>
import Agenda from '@/components/Agenda.vue'

export default {
  name: "App",
  components: {
    Agenda
  }
}
</script>

<style>
.vue-logo {
    max-width: 50px;
}
h1 {
    margin-top: 0;
    margin-left: 40px;
}
h2 {
    text-align: start;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: minmax(40px, auto) 1fr;
  grid-template-areas: 
  'header header'
  'nav main';
}
.header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #42b983;
}
.nav {
    grid-area: nav; 
}
.main {
    grid-area: main;
    text-align: start;
    margin-left: 20px;
    padding-left: 20px;
}
html, body, #app {
    height: 100%;
}
</style>
