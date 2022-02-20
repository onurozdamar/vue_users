<template>
  <div>
    <Post v-for="post in posts" :key="post.id" :post="post" />
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
    posts: Array,
  },
  created() {
    console.log("created post list", this.posts);
  },
};
</script>
