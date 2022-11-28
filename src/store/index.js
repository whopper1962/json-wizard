import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    json: {},
    duplicationError: false,
    invalidKeyError: false
  },
  getters: {
    getJson (state) {
      return state.json;
    },
    getDuplicationErrorStatus (state) {
      return state.duplicationError;
    },
    getInvalidKeyErrorStatus (state) {
      return state.invalidKeyError;
    }
  },
  mutations: {
    SET_JSON (state, json) {
      state.json = json;
    },
    SET_DUPLICATION_ERROR_STATUS (state, status) {
      state.duplicationError = status;
    },
    SET_INVALID_KEY_ERROR_STATUS (state, status) {
      state.invalidKeyError = status;
    }
  },
  actions: {
    setJson (context, json) {
      context.commit('SET_JSON', json);
    },
    setDuplicationErrorStatus (context, status) {
      context.commit('SET_DUPLICATION_ERROR_STATUS', status);
    },
    setInvalidKeyErrorStatus (context, status) {
      context.commit('SET_INVALID_KEY_ERROR_STATUS', status);
    }
  },
  modules: {
  }
})
