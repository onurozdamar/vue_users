<template>
  <div class="posts">
    <Post :post="post" />
    <button @click="save">Edit</button>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "PostDetailView",
  components: {
    Post,
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
  },
  created() {
    console.log("created post detail view", this.$route.params);
    this.$store.dispatch("getPost", this.$route.params.id);
  },
  methods: {
    save() {
      console.log("save", this.user);
      this.$store.dispatch("updateUsers", this.user);
    },
  },
};
</script>

<style scoped></style>
