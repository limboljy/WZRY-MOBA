<template>
  <swiper :options="swiperOptions">
    <swiper-slide>
      <img class="w-100" src="../assets/image/1.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/image/2.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/image/3.jpeg" alt="">
    </swiper-slide>
    <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
  </swiper>
</template>

<script>
import Swiper, {Navigation, Pagination} from 'swiper' ;
Swiper.use([Navigation, Pagination])
export default {
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
    }
  }

}
</script>

<style lang='scss'>
@import '~assets/scss/variables.scss';
  .pagination-home{
    .swiper-pagination-bullet{
      opacity: 1;
      border-radius: 0.1538rem;
      background:map-get($colors,'white');
      &.swiper-pagination-bullet-active{
        background: map-get($colors,'info');
      }
    }
    
  }
</style>