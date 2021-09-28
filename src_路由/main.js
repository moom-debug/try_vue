import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip=false
Vue.use(VueRouter)

new Vue({
    el:"#app",
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this
    },
    router:router
})