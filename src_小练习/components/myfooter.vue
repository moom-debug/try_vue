<template>
  
       <ul class="footer" v-show="todos.length">
                <li class="firstfoot"><input type="checkbox" :checked="boo" @change="che"><span class="info">已完成{{donenum}}项/总共{{todos.length}}项</span></li>
                <li class="secondfoot"><button class="clear" @click="clear">清除已完成选项</button></li>
        </ul>
  
</template>

<script>

export default {
    name:'MyFooter',
    data(){
        return{
            
        }
    },
    
    methods:{
       che(e){
           this.$store.dispatch('checkAll',e.target.checked)
       },
       clear(){
           this.$store.dispatch('clear',this.todos)
       }
    },
    computed:{
        todos(){
            return this.$store.state.todos
        },
        donenum(){
            let i=0;
            this.todos.forEach(element => {
                if(element.done===true)
                    i++;
                
            });
            return i;
        },
        boo(){
            return this.donenum===this.todos.length
        }
    }

}
</script>

<style>
    .footer{
            width: 95%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .info{
            margin-left:20px;
        }
        .clear{
            line-height: 28px;
            width: 120px;
            color:white;
            background-color: rgb(215, 76, 75);
            border: 0px;
            border-radius: 3px 3px;
            padding:3px;
        }

</style>