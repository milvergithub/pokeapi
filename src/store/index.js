import { createStore } from 'vuex';
import pokemon from '@/store/modules/pokemon';

export default createStore({
  state: {
    error: null,
    success: null,
  },
  mutations: {
    SET_GLOBAL_ERROR(state, error) {
      state.error = error;
    },
    SET_GLOBAL_SUCCESS(state, success) {
      state.success = null;
      state.success = success;
    },
  },
  actions: {
  },
  getters: {
    GET_GLOBAL_ERROR: (state) => state.error,
    GET_GLOBAL_SUCCESS: (state) => state.success,
  },
  modules: {
    pokemon,
  },
});
