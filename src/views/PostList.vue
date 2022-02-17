<template>
  <div class="posts">
    <div v-if="userName">{{ userName }}'s Posts</div>
    <div v-for="post in posts" :key="post.id"><Post :post="post" /></div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "PostList",
  components: {
    Post,
  },
  computed: {
    posts() {
      const id = this.$route.params.id;
      console.log(id);
      return this.$store.state.users.filter((u) => u.id === id);
    },
    userName() {
      const id = this.$route.params.id;
      console.log(id);
      return this.$store.state.users.find((u) => u.id === id)?.name;
    },
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
}
</style>
