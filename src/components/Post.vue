<template>
  <div
    class="post"
    @mouseover="showButtons = true"
    @mouseleave="showButtons = false"
  >
    <p>{{ post && post.name }}</p>
    <p>email</p>
    <div v-if="showButtons" class="button-container">
      <button>Detail</button>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  data() {
    return {
      showButtons: true,
    };
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 2px 5px 5px 4px rgb(135, 134, 134);
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
button {
  margin: 10px;
  padding: 5px;
}
p {
  margin: 5px;
  text-align: left;
}
</style>
