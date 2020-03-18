<template>
  <div>
    <h1>{{userId}}</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Another"
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

