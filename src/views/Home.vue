<template>
  <div class="home">
      <h2>Welcome to this Vue.js workshop!</h2>
      <P>
          My goal here is to give you a hands-on, practical, and fun workshop on some core ideas in Vue.js. Here are some important links:
      </P>
      <div class="splash-parent">
        <div class="splash-art">
          <v-card
            class="link-box"
            max-width="400"
            tile
          >
            <v-list-item>
              <a class="link" href="https://codesandbox.io/s/vue-workshop-fresh-1482019-ugfxf" target="_blank">
                <v-list-item-content>
                  <v-list-item-title>CodeSandBox</v-list-item-title>
                  <v-list-item-subtitle>- full repo with IDE & live demo</v-list-item-subtitle>
                </v-list-item-content>
              </a>
            </v-list-item>

            <v-list-item >
              <a class="link" href="https://vue-workshop.netlify.com/" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Stand-Alone Webapp</v-list-item-title>
                <v-list-item-subtitle>- no code accessible</v-list-item-subtitle>
              </v-list-item-content>
              </a>
            </v-list-item>

            <v-list-item>
              <a class="link" href="https://github.com/adamsimonini/vue-workshop" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Github Master Repo</v-list-item-title>
                <v-list-item-subtitle>- final version with completed challenges</v-list-item-subtitle>
              </v-list-item-content>
              </a>
            </v-list-item>
          </v-card>
        </div>
      </div>
      <h2>How To Use This App</h2>
      <ol>
        <li>Navigate using the nav bar on the left.</li>
        <li>Read the lessons, and be sure to check the codesandbox to see the code underlying the various topics. Each lesson has a corresponding ".vue" file within the repo.
        For example, this page is found here: "src > views > Home.vue". Try finding the .vue file for the next page: "Vue - What & Why?"</li>
        <li>Follow along carefully, as there are challenges in-between lessons and every challenge builds upon the prior lessons</li>
        <li>Be creative in your challenge solutions and have fun with it!</li>
      </ol>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
};
</script>

<style scoped>
.link .v-list-item__title{
  color: #2e7d32;
  font-size: 1rem !important;
}
.link {
  width: 100%;
  padding: 0 10px;
  border: 3px solid transparent;
  opacity: 1;
}
.link:hover {
  border-bottom: 3px solid #2e7d32;
}
.splash-art {
  width: 100%;
  background-image: url('../assets/farm-clipart.jpg');
  background-position: center;
  height: 400px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.splash-parent {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link-box {
  opacity: .9;
  padding: 10px 0;
}
</style>