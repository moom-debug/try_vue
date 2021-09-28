import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const Page={
    actions:{

    },
    mutations:{
        REFRESH(state,value){
            state.valall={...state.valall,...value}
            console.log("页面刷新成功")
        }
    },
    state:{
        valall:{
            first:true,
            loading:false,
            users:[],
            err:''
        }
    },


}

export default new Vuex.Store({
    modules:{
        Page
    }
})
    
