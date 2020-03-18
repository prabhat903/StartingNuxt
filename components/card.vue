<template>
  <div class="card">
    <span>User</span>
    <span class="name">{{name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true }
  }
};
</script>
<style>
.card {
  min-width: 200px;
  font-size: 14px;
  color: purple;
  box-shadow: 0px 2px 5px purple;
  padding: 30px;
  margin: 10px;
}
.name {
  font-size: 18px;
  color: salmon;
  margin-left: 15px;
  padding-left: 20px;
  border-left: 1px solid palevioletred;
}
</style>

