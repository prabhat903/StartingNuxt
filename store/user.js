import { getUser } from "~/userlist";
export const state = () => {
  return {
    user: null
  };
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export const actions = {
  fetchUser({ state, commit }, id) {
    getUser(id).then(data => {
      commit("setUser", data);
    });
  }
};
