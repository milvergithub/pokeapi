import { mount } from '@vue/test-utils';
import Layout from '@/components/Layout';

describe('Layout', () => {
  it('should render', () => {
    const wrapper = mount(Layout, {
      global: {
        plugins: [],
        stubs: {
          Menubar: true,
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.componentVM.items.length).toEqual(3);
  });
});
