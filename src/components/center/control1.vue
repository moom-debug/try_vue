<template>
  <div>
      <div class="ny-left">
          <div class="ny-left-title">管理模式</div>
          <div class="ny-left-content">
            <ul style="display: block">
              <li class="" id="">
                <router-link :to="{name:'center1'}" active-class="not">中心简介</router-link>
                <ul></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'center2'}" active-class="not">组织机构</router-link>
                <ul></ul>
              </li>
              <li class="" id="">
                <router-link :to="{name:'center3'}" active-class="not">申报书</router-link>
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