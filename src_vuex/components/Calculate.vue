<template>
    <div class="Cal">
        <h1>当前总数为{{sum}}</h1>
        <h1>当前总数放大10倍为{{sum2}}</h1>
        <select v-model.number="value">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add(value)">点我加</button>
        <button @click="jian(value)">点我减</button>
        <button @click="jianodd(value)">只有当前总数为奇数才可以加</button>
        <button @click="jianwait(value)">稍等一秒后相加</button>
        <h1>下方人员名单一共有{{personlist.length}}</h1>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    name:'Calculate',
    data(){
        return{
            
            value:1
        }
    },
    methods:{
        ...mapMutations('calu',{add:'JIA',jian:'JIAN'}),
        ...mapActions('calu',{jianodd:'jiaodd',jianwait:'jiawait'})
        
    },
    computed:{
        ...mapState('calu',['sum']),
        ...mapState('pers',['personlist']),
        ...mapGetters('calu',{sum2:'sum2'})

    }
}
</script>

<style>