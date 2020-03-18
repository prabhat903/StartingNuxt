<template>
  <div>
    <h1>Users of the applications</h1>
    <div class="userList">
      <template v-for="user in userList">
        <nuxt-link :to="`/users/${user.id}`" :key="user.id">
          <card v-bind="user"></card>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
<script>
import card from "~/components/card";
export default {
  head() {
    return {
      title: "Another"
    };
  },
  data() {
    return {
      userList: [
        { name: "abhishek", id: "user1" },
        { name: "Naresh", id: "user2" }
      ]
    };
  },
  components: {
    card
  }
};
</script>
<style>
.userList {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.userList .card {
  flex-basis: 200px;
}
</style>

