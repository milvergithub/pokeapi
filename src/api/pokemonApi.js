import axios from 'axios';
import config from './config';

const pokemonApi = {
  getPokemon(params = {}) {
    return axios.get(`${config.API_URL}/pokemon`, { params });
  },
};

export default pokemonApi;
