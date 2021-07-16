import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const setInitialState = () => {
    return {
        arrBackLog: [],
        arrTodo: [],
        arrDoing: [],
        arrDone: []
    };

};
export const mutations = {
    addArrBackLog: (state, arrBackLog) => {
        state.arrBackLog.push(arrBackLog);
    },
    addArrTodo: (state, arrTodo) => {
        state.arrTodo.push(arrTodo);
    },
    addArrDoing: (state, arrDoing) => {
        state.arrDoing.push(arrDoing);
    },
    addArrDone: (state, arrDone) => {
        state.arrDone.push(arrDone);
    },
    // getArrBackLog: (state) => {
    //     return state.arrBackLog;
    // },
    // getArrTodo: (state) => {
    //     return state.arrTodo;
    // },
    // getArrDoing: (state) => {
    //     return state.arrDoing;
    // },
    // getArrDone: (state) => {
    //     return state.arrDone;
    // }

};

export default new Vuex.Store({
    state: setInitialState(),
    mutations
})
