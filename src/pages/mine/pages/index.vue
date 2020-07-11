<script>
export default {
  data () {
    return {
      mineData: '<div>曾宇发</div>'
    };
  }
};
</script>

<template>
  <div class="mine">
    <div class="title">
      个人简历
    </div>
    <div
      class="content"
      v-html="mineData"
    />
  </div>
</template>

<style lang="stylus">
@import '~css/variable.stylus'

$mineTitleColor = rgba(23,135,204,0.82)
.mine
  getBlogWindowStyle(90%, $blogBackground)
  .title
    color $mineTitleColor
    text-shadow 1px 1px 1px $mineTitleColor
    height 60px
    margin-bottom 15px
    display flex
    align-items center
    justify-content center
    font-size 25px
  .content
    width 98%
    margin auto
    padding 10px 10px 40px 10px
</style>
