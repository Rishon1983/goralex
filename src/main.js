import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretRight, faChevronCircleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.config.devtools = true;

// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

// Create and mount root instance.
// Route components will be rendered inside <router-view>.
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');