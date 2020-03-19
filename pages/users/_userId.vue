<template>
  <div>
    <h1>{{user.first_name}} {{user.last_name}}</h1>
    <img :src="user.avatar">
    <h3>{{user.email}}</h3>
    <button @click="returnBack">Back</button>
  </div>
</template>
<script>
import { getUser } from "~/store";
export default {
  head() {
    return {
      title: `user page ${this.user.first_name}`
    };
  },
  data() {
    return {
      user: {}
    };
  },
  created() {
    getUser(this.userId).then(data => {
      this.user = data;
    });
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  methods: {
    returnBack() {}
  }
};
</script>

