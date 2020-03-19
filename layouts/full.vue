<template>
  <div id="app">
    <header>From header</header>
    <Nuxt/>
  </div>
</template>
<script>
import header from "~/components/header.vue";
export default {
  components: {
    header
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
