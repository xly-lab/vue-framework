<template>
  <div id="app">
    <v-card flat>
      <v-toolbar color="primary" dark extended flat asd>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-toolbar>
      <v-card class="mx-auto" max-width="700" style="margin-top: -64px">
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text style="height: 200px"></v-card-text>
        <maina />
      </v-card>
    </v-card>
  </div>
</template>

<script>
import maina from './views/main';
export default {
  name: 'App',

  components: {
    maina,
  },
  mounted() {},
};
</script>

<style lang="sass" scoped>
@import './app.scss'
</style>
