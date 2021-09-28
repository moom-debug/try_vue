<template>
  <div>
    <div class="ny-left">
      <div class="ny-left-title">留言</div>
      <div class="ny-left-content">
       
      </div>
      <div class="ny-left-bottom"></div>
    </div>
    <div class="ny-right">
      <div class="ny-right-title">
        当前位置：<span>首页</span>&nbsp;&gt;&gt;&nbsp;<span>互动空间</span>
        &nbsp;&gt;&gt;&nbsp;<span>留言</span>
      </div>
      <div class="ny-right-content news-list01">
        <ul>
          <Messment></Messment>
        </ul>
        <div class="clear"></div>
        <div class="paging right"><div class="manu"></div></div>
      </div>
      <div class="ny-right-bottom"></div>
    </div>
  </div>
</template>

<script>
import Messment from "./messment";

export default {
  components: { Messment },
};
</script>

<style>
</style>