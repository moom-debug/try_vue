<template>
    <div class="per">
        <input type="text" v-model="va"><button @click="add">添加</button>
        <ul>
            <li v-for="person in personlist" :key=person.id>{{person.name}}</li>
        </ul>
        <h1>上面总数为{{sum}}</h1>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return{
            va:'',
            
        }
    },
    methods:{
        add(){
            this.$store.commit('pers/ADD',this.va)
            this.va=''
        }
    },
    computed:{
        personlist(){
            return this.$store.state.pers.personlist
        },
        sum(){
            return this.$store.state.calu.sum
        }
    }
}
</script>

<style>
.per{
    padding-top:50px;
    border-top:1px solid red;
}
</style>