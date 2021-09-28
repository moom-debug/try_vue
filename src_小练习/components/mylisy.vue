<template>
    
       <div class='div-list'>
            <ul class="list">
                <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>        
            </ul>
            <template v-if="this.$store.state.todos.length">
                <button @click='before' class="changePage" :disabled='ppage' >上一页</button>
                <span>第{{this.nowpage+1}}页/共{{this.Page}}页</span>
                <button @click='next' class="changePage" :disabled='npage'>下一页</button>
            </template>   
       </div>
    
  
</template>

<script>
import MyItem from './myitem'
export default {
    name:'MyList',
    data(){
        return{
            nowpage:0
            
        }
    },
    components:{
        MyItem
    },
    methods:{
        next(){
            if(this.nowpage+1<this.Page){
                this.nowpage++
                console.log(this.Page)
            }
        },
        before(){
            if(this.nowpage>0){
                this.nowpage--
                console.log(this.Page)
            }
        }
    },
    computed:{
        Page(){
            return Math.ceil(this.$store.state.todos.length/5)
                
        },
        todos(){
            return this.$store.state.todos.slice(this.nowpage*5,this.nowpage*5+5)
        },
        npage(){
            if(this.Page==this.nowpage+1){
                return true
            }
            else return false
        },
        ppage(){
            if(this.nowpage==0){
                return true
            }
            else return false
        },
        
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(this.$store.state.todos))
            }
        },
        Page:{
            handler(newValue,oldValue){
                if(newValue<this.nowpage+1){
                    this.nowpage=this.nowpage-1
                }
            }
        }
        
    },
    
}
</script>

<style>
    .div-list{
        text-align: center;
    }
    .list{
            width: 95%;
            margin: 15px auto;
    }
    .changePage{
        margin:0px 10px;
        border-radius: 5px 5px;
        background-color:rgb(230, 230, 230);
        border:0px;
        
    }
</style>