<template>
  <div class="list" :style="marginStyle">
    <div class="item">
      <span v-if="user.children.length" class="icon" @click="toggleOpen">{{
        isOpen ? "-" : "+"
      }}</span>
      {{ user && user.name }}
    </div>
    <div v-if="isOpen">
      <UserList
        v-for="child in user.children"
        :key="child.id"
        :user="child"
        :margin="margin + 10"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    user: Object,
    margin: { type: Number, default: 0 },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    hasChildren() {
      return this.user?.children?.length;
    },
    marginStyle() {
      return `margin-left: ${this.margin}px;`;
    },
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.list {
  text-align: left;
}
.item {
  margin-bottom: 5px;
}
.icon {
  font-weight: bold;
  padding: 5px;
}
</style>
