<template>
  <div class="banner">
    <nuxt-link to="/" class="brandHead">
      <h1>Starting Nuxt</h1>
    </nuxt-link>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/users">Users</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.brandHead {
  color: purple;
  text-decoration: none;
}
.banner {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid red;
}
a {
  text-decoration: none;
  padding: 5px;
}
</style>

