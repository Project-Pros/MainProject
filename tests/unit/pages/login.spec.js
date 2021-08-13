import { mount } from '@vue/test-utils'
import Login from '@/pages/login.vue'

describe('Login.vue', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = mount(Login)
  });
  it('should set a new file', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
