import { mount } from '@vue/test-utils'
import KanbanBoard from '@/pages/kanbanBoard.vue'

describe('KanbanBoard.vue', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = mount(KanbanBoard)
  });
  it('should be a vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
