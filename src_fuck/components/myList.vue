<template>
    <div class="row">
        <h1 v-if="valall.first===true">欢迎你</h1>
        <h1 v-if='valall.loading===true'>Loading</h1>
        <MyItem  v-for="item in valall.users" :key="item.id" :item='item'></MyItem>
        <h1 v-if="valall.err!==''">出错啦</h1>
    </div>
</template>

<script>
import MyItem from './myItem'
export default {
    name:'MyList',
    data(){
        return{
           
        }
    },
    components:{
        MyItem
    },
    computed:{
        valall(){
            return this.$store.state.Page.valall
        }
    },
    
}
</script>

<style>

</style>