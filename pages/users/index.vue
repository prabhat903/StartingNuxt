<template>
  <div>
    <h1>Users of the applications</h1>
    <div class="userList">
      <template v-for="user in userList">
        <nuxt-link :to="`/users/${user.id}`" :key="user.id" class="userCard">
          <card v-bind="user"></card>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
<script>
import card from "~/components/card";
export default {
  layout: "full",
  head() {
    return {
      title: "Another"
    };
  },
  data() {
    return {};
  },
  computed: {
    userList() {
      return this.$store.getters.getUserList;
    }
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  components: {
    card
  }
};
</script>
<style>
.userList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

