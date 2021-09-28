import Vue from 'vue'
import App from './App.vue'
import Plugins from './plugins'
Vue.use(Plugins)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
