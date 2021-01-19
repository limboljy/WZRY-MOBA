<template>
<div>
  <div class="topbar bg-black py-2 text-white px-4 d-flex ai-center">
    <a href="#"><img src="../assets/image/logo.png" height="30"></a>
  <div class="px-2 flex-1">
    <div class="text-white">王者荣耀</div>
    <div class="text-dark-2 fs-xxs">团队成就更多</div>
  </div>
      <button type="button" class="btn bg-primary">立即下载</button>
  </div>
  <div class="bg-primary py-2">
    <div class="nav text-white jc-around pt-2 pb-1">
      <div class="nav-item active-severse">
        <router-link to="/home" tag="div">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/" tag="div">攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/" tag="div">赛事中心</router-link>
      </div>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {

}
</script>


<style>
</style>
