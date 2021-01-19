<template>
  <div>
  <home-swiper/>
    <div class="home-nav bg-white mt-3 d-flex flex-wrap pt-4">
      <div class="nav-item mb-4 text-center" v-for="n in 12" :key="n">
        <a href="#" class=" text-dark"><div>
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
          </div></a>
      </div>
      <div class="entry-btn bg-light text-center w-100 py-2">
        <i class="sprite sprite-entry mr-1"></i>
        <span>收起</span>
      </div>
    </div>  

    <!-- End of home-nav -->
    <list-card icon='cc-menu-circle' title="新闻1">
      <div class="nav jc-between pt-3">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">赛事</div>
          </div>
        </div>
      <swiper class="mb-3">
        <swiper-slide class="pt-2" v-for="m in 5">
          <div v-for="n in 5" class="pt-3 d-flex">
            <span>[新闻]</span>
            <span class="flex-1">1月20日全服不停机更新公告</span>
            <span>06/05</span>
          </div>
        </swiper-slide>
      </swiper>
    </list-card>


    <list-card icon='cc-menu-circle' title="新闻2"></list-card>

  </div>
</template>

<script>
import HomeSwiper from "./HomeSwiper";
export default {
  data() {
    return {};
  },
  components: {
    HomeSwiper,
  },
};
</script>

<style lang='scss'>
@import "~assets/scss/variables";
.home-nav {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
  }
}

.sprite {
  background: url("~assets/image/index.png") no-repeat 0 0;
  background-size: 28.8462rem;
  display: inline-block;
  &.sprite-news {
    width: 1.8462rem;
    height: 1.5385rem;
    background-position: 36.467% 15.287%;
  }
  &.sprite-entry {
    background-position: 38.577% 52.076%;
    width: 0.7692rem;
    height: 0.7692rem;
  }
}

.home-nav {
  .nav-item {
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>