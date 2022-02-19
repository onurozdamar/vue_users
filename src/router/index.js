import Vue from "vue";
import VueRouter from "vue-router";
import PostListView from "../views/PostListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts/:id",
    name: "Posts",
    component: PostListView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
