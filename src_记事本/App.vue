<template>
  
      <div class="outter">
          <MyHeader @addtodo="addtodo"></MyHeader>
          <MyList :todos="todos"></MyList>
          <MyFooter :todos="todos" :checkAll="checkAll" ref="myfooter"></MyFooter>
          <button @click="get"></button>
      </div>
  
</template>

<script>
import MyHeader from './components/myheader'
import MyList from './components/mylisy'
import MyFooter from './components/myfooter'
import {nanoid} from 'nanoid'
import axios from 'axios'
// import pubsub from 'pubsub-js'
export default {
    name:'App',
    data(){
        return{
            todos:JSON.parse(localStorage.getItem('todos'))||[]
        }
    },
    methods:{
        addtodo(thing){
            if(thing==="")
                alert("不能为空")
            else{
                this.todos.unshift({id:nanoid(),title:thing,done:false});
            }
        },
        dele(tid){
            if(confirm("确认要删除吗"))
                this.todos=this.todos.filter(p=>p.id!==tid)
        },
        check(tid){
            this.todos.forEach(p=>{
                if(p.id===tid){
                    p.done=!p.done
                }
            })
        },
       checkAll(boo){
           this.todos.forEach(p=>{p.done=boo});
       },
    //    clear(){
    //        this.todos=this.todos.filter(h=>!h.done)
    //    }
        get(){
            axios.get('http://localhost:8080/dong/students').then(
                response =>{
                    console.log('请求成功',response.data)
                },
                err=>{
                    console.log('请求失败',err.message)
                }
            )
        }
    },
    components:{
        MyHeader,MyList,MyFooter
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },
    mounted(){
        this.$refs.myfooter.$on('clear',(h)=>{
            if(confirm("确认清除已完成事项吗"))
                this.todos=this.todos.filter(h=>!h.done)
        }),
        this.$bus.$on("dele",(tid)=>{
             if(confirm("确认要删除吗"))
                this.todos=this.todos.filter(p=>p.id!==tid)
        }),
        this.$bus.$on("check",(tid)=>{
            this.todos.forEach(p=>{
                if(p.id===tid){
                    p.done=!p.done
                }
            })
        })
        this.$bus.$on("setEdit",(tid,name)=>{
            this.todos.forEach(p=>{
                if(p.id=tid){
                    p.title=name
                }
            })
        })
    },
    beforeDestroy() {
        this.$bus.$off("setEdit")
    },

}
</script>

<style scope>
    .outter{
            width: 500px;
            margin: 30px auto;
            padding:15px 0;
            border: 1px solid rgb(239, 239, 239);
        }
    html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*{box-sizing:inherit}*:before,*:after{box-sizing:inherit}img,embed,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

</style>