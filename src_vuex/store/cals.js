import {nanoid} from 'nanoid'
export default{
    namespaced:true,
    actions:{
        jiaodd(context,value){
            if(context.state.sum%2!==0){
                context.commit('JIAODD',value)
            }
        },
        jiawait(context,value){
            setTimeout(() => {
               context.commit("JIAWAIT",value) 
            }, 1000);
        }
    },
    mutations:{
        JIA(state,value){
            state.sum=state.sum+value;
        },
        JIAN(state,value){
            state.sum=state.sum-value;
        },
        JIAODD(state,value){
            state.sum=state.sum+value;
        },
        JIAWAIT(state,value){
            state.sum=state.sum+value;
        },
    },
    state:{
        sum:1
    },
    getters:{
        sum2(state){
            return state.sum*10
        }
    }
}