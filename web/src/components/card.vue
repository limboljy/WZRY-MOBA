<template>
  <div class="card p-2 mt-3 bg-white">
    <div class="card-header d-flex ai-center pb-3 pt-2">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xxl flex-1 pl-2">{{title}}</div>
      <i class="iconfont icon-menu"></i>
    </div>
    <div class="card-body pt-3">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'card',
    props:{
        title:{ type:String, required:true},
        icon:{ type:String, required:true}
    }
};
</script>

<style lang='scss'>
@import "~assets/scss/variables";
.card {
    border-bottom: 1px solid $border-color;
    .card-header{
        border-bottom: 1px solid $border-color
    }
}
</style>