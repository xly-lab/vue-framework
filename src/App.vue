<template>
  <div id="app">
    <div class="container-box">
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="300"></v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {},
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  #app {
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .container-box {
      width: 400px;
      height: 300px;
    }
  }
}
</style>
