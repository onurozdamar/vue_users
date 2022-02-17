import Vue from "vue";
import VueRouter from "vue-router";
import PostList from "../views/PostList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts/:id",
    name: "Posts",
    component: PostList,
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
