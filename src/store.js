import { createStore } from "vuex";

const state = {
  user_id: "",
  username: "",
  token: "",
  groups: "",
  permissions: "",
};

const mutations = {
  setUserData(state, userData) {
    state.user_id = userData.user_id;
    state.username = userData.username;
    state.token = userData.token;
    state.groups = userData.group;
    state.permissions = userData.permissions;
  },
  clearUserData(state) {
    state.user_id = "";
    state.username = "";
    state.token = "";
    state.groups = "";
    state.permissions = "";
  },
};
const actions = {};
const getters = {
  getUserID: (state) => state.user_id,
  getUsername: (state) => state.username,
  getToken: (state) => state.token,
  getGroup: (state) => state.groups,
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
});
