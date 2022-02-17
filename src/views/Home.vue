<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserList v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";

export default {
  name: "Home",
  components: {
    UserList,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>
