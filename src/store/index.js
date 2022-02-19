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
  },
  modules: {},
});
