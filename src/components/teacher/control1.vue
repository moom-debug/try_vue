<template>
  <div>
      <div class="ny-left">
          <div class="ny-left-title">管理模式</div>
          <div class="ny-left-content">
            <ul style="display: block">
              <li class="" id="">
                <router-link :to="{name:'teacher1'}" active-class="not">教学队伍</router-link>
                <ul></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'teacher2'}" active-class="not">中心负责人</router-link>
                <ul></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'teacher3'}" active-class="not">师资队伍</router-link>
                <ul style="display: block"></ul>
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