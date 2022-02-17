import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      // convert users to new model that has children array
      const usersWithChildren = users.map((user) => {
        user.children = [];
        if (!user.parentId) {
          return user;
        }
        const parent = users.find((u) => u.id === user.parentId);
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(user);
        return null;
      });

      state.users = usersWithChildren.filter((u) => u);
    },
  },
  actions: {
    getUsers({ commit }) {
      axios.get("http://localhost:3004/users").then((res) => {
        commit("setUsers", res.data);
      });
    },
  },
  modules: {},
});
