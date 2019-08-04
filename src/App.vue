<template>
  <v-app>
  <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            align-center
          >
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
            >
              <router-link :to=child.route>
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="green darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px; display: flex;"
        class=""
      >
        <v-app-bar-nav-icon  class="home-title" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <router-link  class="home-title" to="/">
          <h1 class="hidden-sm-and-down">Vue Workshop</h1>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <a href="https://vuejs.org/v2/guide/" target="_blank">
        <v-btn
          icon
          large
        >
          <v-avatar
            size="32px"
            item
          >
            <v-img
              src="https://vuejs.org/images/logo.png"
              alt="Vue Docs"
            >
            </v-img></v-avatar>
        </v-btn>
      </a>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          justify-center
        >
        <div id="content-container">
          <router-view></router-view>
        </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {
  },
  data: () => ({
 dialog: false,
      drawer: null,
      items: [
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Part I',
          model: true,
          children: [
            { text: 'Vue - What & Why?', route: '/what-is-vue' },
            { text: 'Components & how to use them', route: '/components' },
            { text: 'Challenge One', route: '/assignment-one' },
            { text: 'Binding data & Events (pt.1)', route: '/binding-data' },
            { text: 'Challenge Two', route: '/assignment-two' },
            { text: 'Vue Directives', route: '/directives' },
            { text: 'Challenge Three', route: '/assignment-three' },
          ],
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Part II',
          model: false,
          children: [
            { text: 'Passing Props (Properties)', route: '/props' },
            { text: 'Challenge Four', route: '/assignment-four' },
            { text: 'Emitting: from child to parent', route: '/emitting' },
            { text: 'Challenge Five', route: '/assignment-five'},
            { text: 'SPAs with Vue Router', route: '/routing' },
            { text: 'The End', route: '/the-end' },
            // {
            //     caption: 'Lifecycle hooks (or, "It is not over until the last component mounts!")',
            //     route: '/about'
            // },
            // {
            //     caption: 'Hands-on section: listen to the children!',
            //     route: '/about'
            // },
            // {
            //     caption: 'Slots & the amorphous component',
            //     route: '/about'
            // },
          ],
        },
      ],
  }),
};
</script>

<style>
.home-title{
  color: white !important;
  text-decoration: none;
  font-size: 14px;
}
.router-link-active{
  border-bottom: 1px solid #347d32;
}

a {
  text-decoration: none;
  color: black !important; 
}

#content-container {
  padding-left: 20px;
  width: 100%;
}
</style>