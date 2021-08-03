/**
 * Sets up the needed imports for the project to run
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

// Import Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'


Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
