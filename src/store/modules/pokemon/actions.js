// actions
import pokemonApi from '@/api/pokemonApi';

const actions = {
  async GET_POKEMON_ACTION({ commit }, params = {}) {
    try {
      commit('SET_LOADING', { loading: true });
      const response = await pokemonApi.getPokemon(params);
      commit('UPDATE_PARAMS', params);
      commit('ADD_POKEMON', response.data);
    } catch (e) {
      commit('SET_GLOBAL_ERROR', e);
    } finally {
      commit('SET_LOADING', { loading: false });
    }
  },
  ADD_FAVORITE_ACTION({ commit }, pokemon) {
    commit('ADD_FAVORITE', pokemon);
  },
};

export default actions;
