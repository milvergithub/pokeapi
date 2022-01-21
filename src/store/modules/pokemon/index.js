import actions from '@/store/modules/pokemon/actions';
import mutations from '@/store/modules/pokemon/mutations';
import getters from '@/store/modules/pokemon/getters';

const state = {
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

export default {
  state,
  actions,
  mutations,
  getters,
};
