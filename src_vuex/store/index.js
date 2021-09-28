import Vue from 'vue'
import Vuex from 'vuex'
import {nanoid} from 'nanoid'
Vue.use(Vuex)
import calu from './cals'


const pers={
    namespaced:true,
    actions:{
        
    },
    mutations:{
        ADD(state,value){
            state.personlist.unshift({id:nanoid(),name:value})
            }
    },
    state:{
        personlist:[
            {id:nanoid(),name:'张三'},
            {id:nanoid(),name:'李四'},
            {id:nanoid(),name:'王五'}
        ]
    },
    getters:{

    }
}


export default new Vuex.Store({
   modules:{
    pers,
    calu
   }
})