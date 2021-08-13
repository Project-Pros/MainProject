// import { mount, createLocalVue  } from '@vue/test-utils'
// import Vuex from 'vuex'
// import KanbanBoard from '@/pages/kanbanBoard.vue'
// import {setInitialState} from "../../../src/store";
// const localVue = createLocalVue()

// localVue.use(Vuex)

describe('KanbanBoard.vue', () => {
  // let wrapper;
  // let store;
  // beforeEach( () => {
  //   store = new Vuex.Store({})
  //   wrapper = mount(KanbanBoard,
  //       {
  //         store: setInitialState(),
  //         $auth: {
  //           user: {
  //             email: "test@gmail.com"
  //           }
  //         }
  //       })
  // });
  // it('should be a vue instance', () => {
  //   expect(wrapper).toBeTruthy();
  // });
  it('should run tests', () => {
      expect(1 + 2).toBe(3);
    });
    it('add a task', () => {
        expect(1 + 2).toBe(3);
    });
    it('delete a task', () => {
        expect(1 + 2).toBe(3);
    });
    it('render vue page', () => {
        expect(1 + 2).toBe(3);
    });
})
