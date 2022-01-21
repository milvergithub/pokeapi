import actions from '@/store/modules/pokemon/actions';

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
});
