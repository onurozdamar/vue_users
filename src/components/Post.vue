<template>
  <div
    class="post"
    @mouseover="showButtons = true"
    @mouseleave="showButtons = false"
  >
    <div v-if="!editing">
      <p>{{ user.name && user.name }}</p>
    </div>
    <div v-if="editing" class="form-container">
      <form>
        <div class="input-container">
          <label for="name-input">Name:</label>
          <input
            v-model="user.name"
            type="text"
            name="name-input"
            id="name-input"
          />
        </div>
      </form>
    </div>

    <div v-if="showButtons" class="button-container">
      <button @click="goToDetail">Detail</button>
      <button @click="editPost">Edit</button>
      <button @click="removePost">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
    user: Object,
  },
  data() {
    return {
      showButtons: true,
      editing: false,
      name: "",
      email: "",
      postLabel: "",
    };
  },
  methods: {
    goToDetail() {
      console.log(this.name, this.email, this.postLabel);
    },
    editPost() {
      this.editing = !this.editing;
    },
    removePost() {},
  },
  created() {
    console.log("post created", this.user);
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 20px;
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
.form-container {
  display: flex;
  justify-content: center;
}
.input-container {
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
label {
  margin-right: 5px;
}
</style>
