// initial state
const state = {
    openPortfolioProject: {
        name: '',
        site: '',
        image: '',
        description: '',
        date: ''
    },
    isOpenProject: false
};

// getters are functions.
const getters = {};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    resetPortfolioProject({commit}) {
        let emptyObj = {
            name: '',
            site: '',
            image: '',
            description: '',
            date: ''
        };
        commit('setPortfolioProject', emptyObj);
    },
    setPortfolioProject({commit}, project) {
        commit('setPortfolioProject', project);
    },
    openCloseProject({commit}, project) {
        commit('openCloseProject', project);
    }
};
// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    setPortfolioProject(state, project) {
        state.openPortfolioProject = {
            name: project.name,
            site: project.site,
            image: project.image,
            description: project.description,
        };
    },
    openCloseProject(state, project) {
        /*check open or close*/
        let bodyElement = document.getElementsByTagName('body')[0];
        if (project) {
            state.openPortfolioProject = project;
            bodyElement.style.overflow = 'hidden';
        } else {
            bodyElement.style.overflow = 'auto';
        }
        state.isOpenProject = !state.isOpenProject;
    }
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}