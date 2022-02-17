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
      state.users = users;
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
