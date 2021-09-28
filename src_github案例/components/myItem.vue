<template>
    <div class="card">
        <slot name="dad" :dad="dad">没有的话就会显示我</slot>
        <a :href="item.html_url" target="_blank">
          <img :src="item.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.login}}</p>
      </div>
</template>

<script>
export default {
    name:'MyItem',
    data(){
        return{
            dad:'爸爸'
        }
    },
    props:['item']
}
</script>

<style>

</style>