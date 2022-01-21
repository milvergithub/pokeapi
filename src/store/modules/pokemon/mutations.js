// mutations
import config from '@/api/config';

const mutations = {
  ADD_POKEMON(state, payload) {
    const data = { ...payload };
    const id = state.params.offset * 5 + 1;
    data.results = data.results.map((value, index) => {
      const poke = { ...value };
      const idPokemon = index + id;
      const isFavorite = [...state.favorites].map((val) => val.id).includes(idPokemon);
      poke.id = idPokemon;
      poke.favorite = isFavorite;
      poke.className = isFavorite
        ? 'p-button-rounded p-button-warning p-button-outlined'
        : 'p-button-rounded p-button-secondary p-button-outlined';
      poke.avatar = `${config.API_URL_AVATAR}/${idPokemon}.png`;
      return poke;
    });
    state.data = { ...state.data, ...data };
  },
  UPDATE_PARAMS(state, payload) {
    state.params = payload;
  },
  ADD_FAVORITE(state, payload) {
    const data = { ...state.data };
    const isFavorite = !payload.favorite;
    const className = isFavorite
      ? 'p-button-rounded p-button-warning p-button-outlined'
      : 'p-button-rounded p-button-secondary p-button-outlined';
    data.results = data.results.map((value) => {
      if (value.id === payload.id) {
        // eslint-disable-next-line no-param-reassign
        value = { ...payload, favorite: isFavorite, className };
      }
      return value;
    });
    if (isFavorite) {
      state.favorites.push({ ...payload, favorite: isFavorite, className: 'p-button-rounded p-button-warning' });
    } else {
      state.favorites = [...state.favorites].filter((value) => value.id !== payload.id);
    }
    state.data = data;
  },
  SET_LOADING(state, payload) {
    state.data = { ...state.data, ...payload };
  },
};

export default mutations;
