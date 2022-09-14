import createInstance from '@/api'
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
      state.name = name;
    },
    GET_AGE: function (state, age) {
      state.age = age;
    },
    GET_GENDER: function (state, gender) {
      state.gender = gender;
    },
    GET_COUNTRY: function (state, country) {
      state.country = country;
    },
  },
  actions: {
    getName: function ({ commit }, name) {
      commit('GET_NAME', name);
    },
    getAge: async function ({ commit }, name) {
      try {
        const res = await createInstance().get(`https://api.agify.io/?name=${name}`);
        commit('GET_AGE', res.data.age);
      } catch (error) {
        console.log(error);
      }
    },
    getGender: async function ({ commit }, name) {
      try {
        const res = await createInstance().get(`https://api.genderize.io/?name=${name}`);
        commit('GET_GENDER', res.data.gender);
      } catch (error) {
        console.log(error);
      }
    },
    getCountry: async function ({ commit }, name) {
      try {
        const res = await createInstance().get(`https://api.nationalize.io/?name=${name}`);
        commit('GET_COUNTRY', res.data.country);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
