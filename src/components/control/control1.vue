<template>
  <div>
      <div class="ny-left">
          <div class="ny-left-title">管理模式</div>
          <div class="ny-left-content">
            <ul style="display: block">
              <li class="" id="">
                <router-link :to="{name:'conspa1'}" active-class="not">管理体制</router-link>
                <ul></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'conspa2'}" active-class="not">运行机制</router-link>
                <ul></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'conspa3'}" active-class="not">校级制度</router-link>
                <ul style="display: block"></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'conspa4'}" active-class="not">中心制度</router-link>
                <ul></ul>
              </li>
            </ul>
          </div>
          <div class="ny-left-bottom"></div>
        </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Conrtol1"
}
</script>

<style>
.not{
  font-weight: bold;
}
</style>