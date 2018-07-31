import * as types from '../mutation-types';

const state = {
  error: null,
  token: null,
  expiresAt: null,
  isAuthorizing: false,
}

const getters = {
  isAuthenticated: state => !!(state.token && state.expiresAt > Date.now())
}

const mutations = {
  [types.LOGIN](state) {
    state.isAuthorizing = true;
  },
  [types.LOGIN_SUCCESS](state, { token, expiresIn }) {
    state.error = null;
    state.token = token;
    state.expiresAt = Date.now() + parseInt(expiresIn);
    state.isAuthorizing = false;
  },
  [types.LOGIN_FAILURE](state, { error }) {
    state.error = error;
    state.isAuthorizing = false;
  },
  [types.LOGOUT](state) {
    state.token = null;
    state.isAuthorizing = false;
  },
}

const actions = {
  login: ({ commit }, credentials) => new Promise((resolve) => {
    commit(types.LOGIN);
    window.axios.post('/login', credentials).then((response) => {
      console.log(response);
      commit(types.LOGIN_SUCCESS, { token: response.data.data.token, expiresIn: response.data.data.expiresIn });
      window.axios.defaults.headers.common['Authorization'] = response.data.data.token;
      resolve(response)
    })
    .catch((errors) => {
      commit(types.LOGIN_FAILURE, errors.response.data.error);
    })
  }),
  logout: ({ commit }) => {
    return new Promise((resolve) => {
      commit(types.LOGOUT)
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
