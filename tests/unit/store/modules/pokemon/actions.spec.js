import actions from '@/store/modules/pokemon/actions';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('POKEMON ACTIONS', () => {
  it('should GET_POKEMON_ACTION ok', async () => {
    const commit = jest.fn();

    await actions.GET_POKEMON_ACTION({ commit }, {
      limit: 5,
      offset: 0,
    });
    expect(commit).toBeCalledTimes(4);
    expect(commit).toHaveBeenCalledTimes(4);
    expect(commit).toBeCalled();
  });

  it('should GET_POKEMON_ACTION error', async () => {
    const commit = jest.fn();
    const mock = new MockAdapter(axios);
    await mock.onGet('/pokemon').reply(400, {});
    await actions.GET_POKEMON_ACTION({ commit }, {
      limit: 5,
      offset: 0,
    });
    expect(commit).toBeCalledTimes(3);
    expect(commit).toHaveBeenCalledTimes(3);
    expect(commit).toBeCalled();
  });
});
