<template>
<div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
    <div v-show=!show class="closed-menu">
        <div class="agenda-text">
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span>A</span>
        </div>
    </div>
    <div v-show=show class="opened-menu">
      <h3>Agenda</h3>
      <ul>
        <li v-for="(item, index) in links" :key="index">
            <router-link :to="item.route">{{item.caption}}</router-link>
        </li>
      </ul>
    </div>
</div>
</template>

<script>

export default {
  name: "Agenda",
  data: function () {
    return {
        show: false,
        links: [
            {
                caption: 'Vue - What & Why?',
                route: '/what-is-vue'
            },
            {
                caption: 'Components & how to use them',
                route: '/components'
            },
            {
                caption: 'Challenge One',
                route: '/assignment-one'
            },
            {
                caption: 'Binding data & Events (pt.1)',
                route: '/binding-data'
            },
            {
                caption: 'Challenge Two',
                route: '/assignment-two'
            },
            {
                caption: 'Vue Directives',
                route: '/directives'
            },
            {
                caption: 'Passing Props (Properties)',
                route: '/props'
            },
            {
                caption: 'Hands-on section: binding, props, & binding props',
                route: '/about'
            },
            {
                caption: '--break--',
                route: '#'
            },
            {
                caption: 'From child to parent: event listeners & custom functions ($emit)',
                route: '/about'
            },
            {
                caption: 'Lifecycle hooks (or, "It\'\s not over until the last component mounts!")',
                route: '/about'
            },
            {
                caption: 'Hands-on section: listen to the children!',
                route: '/about'
            },
            {
                caption: 'SPAs with Vue Router',
                route: '/about'
            },
            {
                caption: 'Slots & the amorphous component',
                route: '/about'
            },
            {
                caption: 'Hands-on section: routing, slots, and SPAs (Oh my!)',
                route: '/about'
            },
        ],
    }
  },
  methods: {
    mouseover: function () {
        this.show = true
    },
    mouseleave: function () {
        this.show = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agenda-text {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}
.opened-menu {
    position: sticky;
    top: 0;
    padding-top: 20px;
}
.closed-menu span {
    color: white;
    font-size: 1em;
}
.closed-menu {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 40px;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#42b983+0,42b983+41,2ab775+52,00a54d+100 */
    background: #42b983; /* Old browsers */
    background: -moz-linear-gradient(top, #42b983 0%, #42b983 41%, #2ab775 52%, #00a54d 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #42b983 0%,#42b983 41%,#2ab775 52%,#00a54d 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #42b983 0%,#42b983 41%,#2ab775 52%,#00a54d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#42b983', endColorstr='#00a54d',GradientType=0 ); /* IE6-9 */
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
a:hover {
  color: #42b983;
}
.hello,
ul {
  min-height: 400px;
}
ul {
  padding: 0 10px;
  border-right: 1px solid #41b883;
}
h3 p {
  text-align: left !important;
}
</style>
