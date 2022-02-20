import Vue from "vue";
import VueRouter from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostDetailView from "../views/PostDetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts/:id",
    name: "Posts",
    component: PostListView,
  },
  {
    path: "/post-detail/:id",
    name: "PostDetail",
    component: PostDetailView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
