<template>
  <ul>
    <li v-for="m in mess" :key='m.id'>
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <router-link :to="{
            name:'detai',
            query:{
                id:m.id,
                title:m.title
            }
        }">{{m.title}}</router-link>
        <button @click='show(m)'>Push查看</button>

    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
        mess:[
            {id:'001',title:'消息001'},
            {id:'002',title:'消息002'},
            {id:'003',title:'消息003'}
        ]
    };
  },
  methods:{
      show(m){
          this.$router.push({
              name:'detai',
              query:{
                  id:m.id,
                  title:m.title
              }
          })
      }
  },
  beforeRouteEnter (to, from, next) {
    console.log("组建进入路由守卫")
    next()
  },
  beforeRouterLeave(to,from,next){
      console.log("组件离开路由守卫")
      next()
  }
};
</script>

<style>
</style>