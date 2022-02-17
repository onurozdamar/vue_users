<template>
  <div id="app">
    <div class="user-list">
      <UserList v-for="user in users" :key="user.id" :user="user" />
    </div>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";

export default {
  name: "App",
  components: {
    UserList,
  },
  computed: {
    users() {
      // convert users to new model that has children array
      console.log(this.$store.state.users);
      const usersWithChildren = this.$store.state.users.map((user) => {
        user.children = [];
        if (!user.parentId) {
          return user;
        }
        const parent = this.$store.state.users.find(
          (u) => u.id === user.parentId
        );
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(user);
        return null;
      });

      return usersWithChildren.filter((u) => u);
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: auto;
}

.user-list,
.router-view {
  border: 1px solid black;
  padding: 10px;
}
.user-list {
  flex: 1;
}
.router-view {
  flex: 3;
}
</style>
