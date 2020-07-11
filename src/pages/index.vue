<script>
import BaseNavigation from '../components/BaseNavigation';
export default {
  components: {
    BaseNavigation
  },
  data () {
    return {
      onScroll: false
    };
  },
  methods: {
    toPath () {
      this.$router.push({
        path: '/home/moduleOne'
      });
      console.log(this.$router);
    },
    scroll ($event) {
      this.onScroll = !!$event.target.scrollTop;
    }
  }
};
</script>

<template>
  <div class="frame">
    <div class="frame-left">
      <!-- 菜单 -->
      <BaseNavigation />
    </div>
    <div class="frame-right">
      <header />
      <div
        :class="['content', {'scroll-shadow': onScroll}]"
        @scroll.stop="scroll"
      >
        <router-view />
      </div>
      <footer>
        <div class="copyright">
          Copyright © 2019 Jzeng
        </div>
        <div class="powered">
          Powered by
          <a
            class="autor"
            href="###"
            target="_blank"
          >
            Jzeng
          </a>
          |
          <a
            class="beiAn"
            href="###"
            target="_blank"
          >
            陕ICP备18003281号
          </a>
        </div>
      </footer>
    </div>
    <!-- 背景图 -->
    <div class="background">
      <div class="left" />
      <div class="right" />
    </div>
  </div>
</template>

<style lang="stylus">
@import '~css/variable.stylus'
// 相应左右宽
frameLeftWidth = 350px
headerHeight = 120px
footerHeight = 80px
getFrameRightWith(leftWidth)
  'calc(100% - %s)' % leftWidth
getContentHeight(headerHeight, footerHeight)
  'calc(100vh - %s - %s)' % $1=headerHeight, $2=footerHeight
.frame
  height 100%
  width 100%
  display flex
  transition all .2s
  position relative
  background white
  z-index 0
  .frame-left
    display flex
    align-items center
    justify-content center
    width frameLeftWidth
  .frame-right
    width getFrameRightWith(frameLeftWidth)
    &>header
      height headerHeight
    &>.content
      height getContentHeight(headerHeight, footerHeight)
      overflow-y auto
    &>footer
      height footerHeight
      display flex
      flex-direction column
      align-items center
      justify-content center
      .copyright
        color #999
        margin-bottom 10px
      .powered
        color #777
        a
          color #777
  .background
    position absolute
    bottom 0
    width 100%
    height 50%
    max-height 680px
    z-index -999
    .left
      background url('~images/background-left.png')
      background-position bottom 0 right
      background-repeat repeat-x
      background-size auto 100%
      height 100%
      width 100%
    .right
      background url('~images/background-right.png')
      background-size auto 100%
      background-position 100% 100%
      background-repeat no-repeat
      height 100%
      width 100%
      position absolute
      top 0
.scroll-shadow
  background linear-gradient($themaBackground, transparent) 0 0 / 100% 0px, radial-gradient(at top, rgba(0,0,0, .6), transparent 70%) 0 0 / 100% 50px,
             linear-gradient($themaBackground, transparent) bottom / 100% 50px, radial-gradient(at bottom, rgba(0,0,0, .6), transparent 70%) bottom / 100% 50px;
  background-repeat no-repeat
  background-size 100% 40px,100% 40px,100% 14px,100% 14px
  // background-attachment local, scroll
  background-attachment local, scroll, local, scroll
</style>
