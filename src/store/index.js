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
    setBacklog: (state, arrBacklog) => {
        state.arrBackLog = arrBacklog;
    },
    setTodo: (state, arrTodo) => {
        state.arrTodo = arrTodo;
    },
    setDoing: (state, arrDoing) => {
        state.arrDoing = arrDoing;
    },
    setDone: (state, arrDone) => {
        state.arrDone = arrDone;
    }
};
export const getters = {
    getBacklog: (state) => {
        return state.arrBackLog;
    },
    getTodo: (state) => {
        return state.arrTodo;
    },
    getDoing: (state) => {
        return state.arrDoing;
    },
    getDone: (state) => {
        return state.arrDone;
    }
};
export default new Vuex.Store( {
    state: setInitialState(),
    mutations,
    getters
});