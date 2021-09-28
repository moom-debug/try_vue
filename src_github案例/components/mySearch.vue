<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="value"/>&nbsp;<button @click="search">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'MyList',
    data(){
        return{
            value:''
        }
    },
    methods:{
        search(){
            this.$bus.$emit('user',{first:false,loading:true,users:[],err:''})
            axios.get(`https://api.github.com/search/users?q=${this.value}`).then(
                response=>{
                    console.log("成了")
                    console.log(response.data.items)
                    this.$bus.$emit('user',{first:false,loading:false,users:response.data.items,err:''})
                },
                error=>{
                    this.$bus.$emit('user',{loading:false,user:[],err:'出错啊'})
                }
            )
        }
    }
}
</script>

<style>

</style>