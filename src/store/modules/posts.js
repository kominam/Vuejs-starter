import * as types from '../mutation-types';

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    all_posts: state => state.posts,
  },
  mutations: {
    [types.GET_POSTS](state, payload) {
      state.posts = payload.data;
    },
  },
  actions: {
    fetchAllPosts({ commit }) {
      window.axios.get('/posts').then((response) => {
        commit(types.GET_POSTS, response.data);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
