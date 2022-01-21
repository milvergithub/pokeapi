import mutations from '@/store/modules/pokemon/mutations';

const initialState = {
  params: {
    limit: 5,
    offset: 0,
  },
  favorites: [],
  data: {
    loading: false,
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};
const pokemon = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
};
const payload = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5',
  previous: null,
  results: [{ ...pokemon }, { ...pokemon }, { ...pokemon }],
};
describe('Mutations POKEMON', () => {
  describe('ADD_POKEMON', () => {
    it('UPDATE_PARAMS adds new params to the state', () => {
      const params = {
        limit: 5,
        offset: 1,
      };
      const state = { ...initialState };

      mutations.UPDATE_PARAMS(state, params);
      expect(state.params).toEqual(params);
    });
  });
  describe('SET_LOADING', () => {
    it('should update loading to true', () => {
      const state = { ...initialState };
      mutations.SET_LOADING(state, { loading: true });
      expect(state.data.loading).toBeTruthy();
    });
  });
  describe('ADD_FAVORITE', () => {
    it('should add a data response', () => {
      const state = { ...initialState };
      mutations.ADD_POKEMON(state, { ...payload });
      expect(state.data.results.length).toBe(3);
    });
    it('should add a favorite', () => {
      const state = { ...initialState };

      mutations.ADD_POKEMON(state, payload);
      mutations.ADD_FAVORITE(state, state.data.results[0]);

      expect(state.favorites.length).toBe(1);
      expect(state.data.results[0].favorite).toBeTruthy();
    });

    it('should remove a favorite', () => {
      const state = { ...initialState };
      mutations.ADD_POKEMON(state, { ...payload });
      mutations.ADD_FAVORITE(state, state.data.results[0]);
      const item = state.data.results[0];
      mutations.ADD_FAVORITE(state, { ...item, favorite: true });
      expect(state.data.results[0].favorite).toBeFalsy();
      expect(state.favorites.length).toBe(0);
    });
  });
});
