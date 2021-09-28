<template>
  
      <li class="item">
          <div class="item_left">
            <input  type="checkbox" :checked="todo.done" @click="check">
                <span v-if="!todo.isEdit">{{todo.title}}</span>
                <input type="text" v-bind:value="todo.title" v-if='todo.isEdit' @blur="oblur" @keyup.enter="oblur" ref="in">
          </div>
          <div>
            <button class='edit' @click='edit' v-if="!todo.isEdit">编辑</button>
            <button class="delete" @click="dele">删除</button>
          </div>
          
      </li>
        
  
</template>

<script>
// import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    data(){
        return{
           
        }
    },
    props:["todo"],
    methods:{
        check(){
            this.$store.dispatch("check",this.todo.id)
        },
        dele(){
            this.$store.dispatch("dele",this.todo.id)
        },
        edit(){
            if(this.todo.hasOwnProperty('isEdit')){
                this.todo.isEdit=1
            }
            else{
                console.log(this)
                this.$set(this.todo,'isEdit',1)
            }
            console.log(this)
                setTimeout(()=>{
                    this.$refs.in.focus()
            })
            
        },
        oblur(e){
            if(e.target.value==""){
                alert("不能为空")
                this.todo.title="待填"
                
            }
            else{
                this.todo.title=e.target.value
                this.todo.isEdit=0
            }
           
            
            
        }
    }

}
</script>

<style>
    .item{
            line-height: 30px;
            border: 1px solid rgb(230, 230, 230);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 5px;
        }
        .item:hover{
            background-color: rgb(221, 221, 221);
        }
        .delete{
            line-height: 20px;
            width: 60px;
            color:white;
            background-color: rgb(215, 76, 75);
            border: 0px;
            border-radius: 3px 3px;
            padding:3px;
        }
        .edit{
            line-height: 20px;
            width: 60px;
            color:white;
            background-color: rgb(88, 75, 161);
            margin-right:3px;
            border: 0px;
            border-radius: 3px 3px;
            padding:3px;
        }
</style>