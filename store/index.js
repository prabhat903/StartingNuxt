import { getUsers } from "~/userlist";
export const state = () => {
  return { users: [] };
};

export const mutations = {
  setList(state, users) {
    state.users = users;
  }
};

export const getters = {
  getUserList(state) {
    return state.users.map(ele => ({
      id: ele.id,
      name: ele.first_name + " " + ele.last_name
    }));
  }
};
export const actions = {
  fetchUsers({ commit }) {
    getUsers().then(data => {
      commit("setList", data);
    });
  }
};
