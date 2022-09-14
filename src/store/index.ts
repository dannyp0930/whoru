import { createStore } from 'vuex'

export default createStore({
  state: {
    name: null,
    age: null,
    gender: null,
    country: [],
  },
  getters: {
  },
  mutations: {
    GET_NAME: function (state, name) {
      state.name = name
    }
  },
  actions: {
    getName: function ({ commit }, name) {
      commit('GET_NAME', name)
    }
  },
  modules: {
  }
})
