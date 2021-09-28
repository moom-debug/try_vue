<template>
  <div class="ny-right">
    <div class="ny-right-title">
      当前位置：<span>首页</span>&nbsp;&gt;&gt;&nbsp;<span>管理模式</span>
      &nbsp;&gt;&gt;&nbsp;<span>校级体制</span>
    </div>
    <div v-show="list===0" class="ny-right-content news-list01">
      <ul>
        <li >
          <router-link :to="{name:'conspali1',params:{li:1}}"
            >关于加强我校实验室建设与管理的意见</router-link
          ><span class="fRight">2015-06-03</span>
        </li>
        <li>
           <router-link   :to="{name:'conspali1',params:{li:2}}"
            >华南农业大学大型精密贵重仪器设备开放使用管理办法</router-link
          ><span class="fRight">2015-06-03</span>
        </li>
        <li>
          <router-link   :to="{name:'conspali1',params:{li:3}}"
            >华南农业大学关于开设综合性、设计性实验的实施办法</router-link >
          <span class="fRight">2015-06-03</span>
        </li>
      </ul>
      
      <div class="clear"></div>
      <div class="paging right">
        <div class="manu"></div>
      </div>
    </div>
    <router-view></router-view>
    <div class="ny-right-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Conrtol1",
  data(){
    return{
      list:0
    }
  },
  methods:{
    one(){
      this.list=1
    },
    pu(){
      this.$router.push({
        name:'conspa3'
      })
    },
    backTop() {
                let thats = window.pageYOffset
                
                let timer = setInterval(() => {
                    
                    // console.log(thats)
                    thats =(thats -250)
                    document.documentElement.scrollTop=document.body.scrollTop=thats  //
                    // console.log(that.scrollTop)
                    // console.log(thats )
                    if(thats  < 0) {
                      clearInterval(timer)
                    }
                }, 1)
    },
  },
  beforeMount(){
    this.list=0
  },
  deactivated(){
    this.list=0
    console.log("wobeizhixingl")
  },
  
};
</script>

<style>
  .flyfa{
    position:relative;
  }

  .clearfix::before,
.clearfix::after{
    content: "";
    display: table;
    clear: both;
}
</style>