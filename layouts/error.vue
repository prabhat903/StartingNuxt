<template>
  <div>
    <h1>Your cought an error</h1>
    <p>{{error.message}}</p>
    <nuxt-link to="/">move to home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      default: {
        message: "Please Visit after some time or refresh"
      }
    }
  }
};
</script>

<style>
</style>
