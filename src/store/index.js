/**
 * Store of all the global variables and methods to get/set each of those variables.
 */
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
    /**
     * Sets the backlog array
     * @param state of the Store
     * @param arrBacklog
     */
    setBacklog: (state, arrBacklog) => {
        state.arrBackLog = arrBacklog;
    },
    /**
     * Sets the todo array
     * @param state of the Store
     * @param arrTodo
     */
    setTodo: (state, arrTodo) => {
        state.arrTodo = arrTodo;
    },
    /**
     * Sets the doing array
     * @param state of the Store
     * @param arrDoing
     */
    setDoing: (state, arrDoing) => {
        state.arrDoing = arrDoing;
    },
    /**
     * Sets the done array
     * @param state of the Store
     * @param arrDone
     */
    setDone: (state, arrDone) => {
        state.arrDone = arrDone;
    }
};
export const getters = {
    /**
     * Gets the backlog array
     * @param state of the store
     * @returns {[]}
     */
    getBacklog: (state) => {
        return state.arrBackLog;
    },
    /**
     * Gets the todo array
     * @param state of the store
     * @returns {[]}
     */
    getTodo: (state) => {
        return state.arrTodo;
    },
    /**
     * Gets the doing array
     * @param state of the store
     * @returns {[]}
     */
    getDoing: (state) => {
        return state.arrDoing;
    },
    /**
     * Gets the done array
     * @param state of the store
     * @returns {[]}
     */
    getDone: (state) => {
        return state.arrDone;
    }
};
export default new Vuex.Store( {
    state: setInitialState(),
    mutations,
    getters
});