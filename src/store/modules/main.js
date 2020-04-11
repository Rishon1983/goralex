// initial state
const state = {
    isShowBackdrop: false
}

// getters are functions.
const getters = {}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    isShowBackdropAction({commit}){
        commit('isShowBackdrop')
    }
}
// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    isShowBackdrop(state){
        state.isShowBackdrop = !state.isShowBackdrop
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