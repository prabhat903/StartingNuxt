<template>
  <div id="app">
    <app-header>From header</app-header>
    <Nuxt/>
  </div>
</template>
<script>
import appHeader from "~/components/appHeader.vue";
export default {
  components: {
    appHeader
  },
  head() {
    return {
      titleTemplate: `%s - Nuxt App full layout`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Testing by Prabhat903"
        }
      ]
    };
  }
};
</script>
<style>
#app {
  border: 1px solid black;
  padding: 10px;
}
</style>
