import * as types from '../mutation-types'
import { HTTP } from '../../../config/api'

export default {
  namespaced: true,
  state: {
    posts: []
  },
  getters: {
    all_posts: state => state.posts
  },
  mutations: {
    [types.GET_POSTS](state, payload) {
      state.posts = payload.data
    }
  },
  actions: {
    fetchAllPosts ({ commit }) {
      HTTP.get('/posts').then(response => {
        commit(types.GET_POSTS, response.data)
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
