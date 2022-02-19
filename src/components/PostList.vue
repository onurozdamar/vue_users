<template>
  <div>
    <Post :user="user" />
    <PostList v-for="child in user.children" :key="child.id" :user="child" />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "PostList",
  components: {
    Post,
  },
  props: {
    user: Object,
  },
  created() {
    console.log("created post list", this.user);
  },
};
</script>
