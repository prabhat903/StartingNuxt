<template>
  <div id="app">
    <Nav/>
    <Nuxt/>
  </div>
</template>
<script>
import Nav from "~/components/nav.vue";
export default {
  components: {
    Nav
  },
  head() {
    return {
      titleTemplate: `%s - Nuxt App`,
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
