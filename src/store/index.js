import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    posts: [],
    post: {},
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    removePost(state, id) {
      state.posts = state.posts.filter((p) => p.id !== id);
    },
    setPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    getUsers({ commit }) {
      axios
        .get("http://localhost:3004/users")
        .then((res) => {
          commit("setUsers", res.data);
        })
        .catch((err) => {
          console.log(err);
          commit("setUsers", []);
        });
    },
    updateUser(d, data) {
      axios
        .put("http://localhost:3004/users/" + data.id, {
          id: data.id,
          parentId: data.parentId,
          name: data.name,
        })
        .then((res) => {
          console.log("then", res);
          // commit("setUsers", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async updateUsers({ dispatch }, data) {
      const allUsers = [];

      const mapData = (data) => {
        allUsers.push({
          id: data.id,
          parentId: data.parentId,
          name: data.name,
        });
        if (!data.children) {
          return data;
        }
        return data.children.map(mapData);
      };

      mapData(data);

      const requests = allUsers.map((user) => dispatch("updateUser", user));
      const response = await Promise.all(requests);

      return response.data;
    },
    getPosts({ commit }) {
      console.log("getPosts");
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log("res post", res);
          commit("setPosts", res.data);
        })
        .catch((err) => {
          console.log(err);
          commit("setPosts", []);
        });
    },
    getPost({ commit }, id) {
      console.log("getPost detail", id);
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((res) => {
          console.log("res post detail", res);
          commit("setPost", res.data);
        })
        .catch((err) => {
          console.log(err);
          commit("setPost", {});
        });
    },
  },
  modules: {},
});
