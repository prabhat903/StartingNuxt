<template>
  <div>
    <h1>{{user}}</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `user page ${this.user.name}`
    };
  },
  data() {
    return {
      user: null
    };
  },
  created() {},
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

