<template>
  <div id="app">
    <nav-bar />
    <b-container fluid class="scroll-sides">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import NavBar from "@/components/_includes/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
.scroll-sides {
  overflow-x: scroll;
}
</style>
