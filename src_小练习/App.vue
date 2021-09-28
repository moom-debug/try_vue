<template>
  
      <div class="outter">
          <MyHeader></MyHeader>
          <MyList></MyList>
          <MyFooter></MyFooter>
         
      </div>
  
</template>

<script>
import MyHeader from './components/myheader'
import MyList from './components/mylisy'
import MyFooter from './components/myfooter'
import {nanoid} from 'nanoid'

export default {
    name:'App',
    data(){
        return{
            
        }
    },
    components:{
        MyHeader,MyList,MyFooter
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },
    computed:{
        todos(){
            return this.$store.state.todos
        }
    },
    
}
</script>

<style scope>
    .outter{
            width: 500px;
            margin: 30px auto;
            padding:15px 0;
            border: 1px solid rgb(239, 239, 239);
        }
    html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*{box-sizing:inherit}*:before,*:after{box-sizing:inherit}img,embed,object,audio,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

</style>