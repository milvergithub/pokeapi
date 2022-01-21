import { mount } from '@vue/test-utils';
import Pokemon from '@/views/Pokemon';
import store from '@/store';
import ToastService from 'primevue/toastservice';

describe('Pokemon', () => {
  it('should render', () => {
    const wrapper = mount(Pokemon, {
      global: {
        plugins: [store, ToastService],
      },
    });
    expect(wrapper.exists());
  });
  it('should add a favorite OK', () => {
    const wrapper = mount(Pokemon, {
      global: {
        plugins: [store, ToastService],
        stubs: {
          DataTable: true,
          Column: true,
          Button: true,
        },
      },
    });
    expect(wrapper.componentVM.results).toEqual([]);
    wrapper.componentVM.nextPrevious(1);
    wrapper.componentVM.addFavorite({ id: 1 });
    expect(store.getters.GET_DATA.next).toBeNull();
    expect(store.getters.GET_FAVORITES.length).toEqual(1);
  });
});
