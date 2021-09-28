import Vue from 'vue'
import Vuex from 'vuex'
import {nanoid} from 'nanoid'
Vue.use(Vuex)

export default new Vuex.Store({
    actions:{
        addtodo(context,value){
            if(value==="")
                alert("不能为空")
            else{
                context.state.todos.unshift({id:nanoid(),title:value,done:false});
            }
        },
        dele(context,value){
            if(confirm("确认要删除吗"))
                context.state.todos= context.state.todos.filter(p=>p.id!==value)
        },
        check(context,value){
            context.state.todos.forEach(p=>{
                if(p.id===value){
                    p.done=!p.done
                }
            })
        },
       checkAll(context,value){
           context.state.todos.forEach(p=>{p.done=value});
       },
       clear(context,value){
            context.state.todos=context.state.todos.filter(h=>!h.done)
        }
    },
    mutations:{

    },
    state:{
        todos:JSON.parse(localStorage.getItem('todos'))||[],
        nowpage:0
    }
})