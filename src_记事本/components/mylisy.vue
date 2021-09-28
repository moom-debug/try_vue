<template>
    
        <ul class="list">
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>        
        </ul>
    
  
</template>

<script>
import MyItem from './myitem'
export default {
    name:'MyList',
    data(){
        return{

        }
    },
    components:{
        MyItem
    },
    props:["todos"]
}
</script>

<style>
    .list{
            width: 95%;
            margin: 15px auto;
        }
</style>