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
import Home from './views/Home.vue'
import Agenda from '@/components/Agenda.vue'

export default {
  name: "App",
  components: {
    Home,
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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: minmax(10%, auto) 1fr;
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
}
html, body, #app {
    height: 100%;
}
</style>
