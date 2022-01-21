// getters
const getters = {
  GET_POKEMON: (state) => state.data.results,
  GET_FAVORITES: (state) => state.favorites,
  GET_DATA: (state) => state.data,
  GET_PARAMS: (state) => state.params,
  GET_LOADING: (state) => state.data.loading,
};

export default getters;
