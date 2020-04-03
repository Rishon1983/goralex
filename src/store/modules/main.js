// import mainData from '../../api/mainData'

// initial state
const state = {
    msg: 'Welcome to GorAlex'
}

// getters are functions.
const getters = {}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    updateMessage({state, commit}, event) {
        commit('setMainMessage', event.target.value)
    },
}
// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    setMainMessage(state, message) {
        state.msg = message;
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}