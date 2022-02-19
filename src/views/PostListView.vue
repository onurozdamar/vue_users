<template>
  <div class="posts" v-if="userName">
    <div>{{ userName }}'s Posts</div>
    <PostList :user="user" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";

export default {
  name: "PostListView",
  components: {
    PostList,
  },
  computed: {
    user() {
      const id = 1 * this.$route.params.id;
      console.log({
        id,
        u: this.$store.state.users,
        f: this.$store.state.users.find((u) => u.id === id),
      });
      return this.$store.state.users.find((u) => u.id === id);
    },
    userName() {
      return this.user?.name;
    },
  },
  created() {
    console.log("created post list view", this.user, this.$store.users);
  },
  methods: {
    save() {
      console.log("save", this.$store.users);
    },
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-left: 20px;
  height: 100%;
}
button {
  padding: 5px;
  align-self: flex-start;
  justify-self: flex-end;
  margin: 10px;
}
</style>
