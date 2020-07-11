<script>
import imgSrc from "images/favicon/bowerser-window-logo.jpg";
export default {
  data() {
    return {
      imgSrc,
      navigationData: [
        {
          name: "博客首页",
          descrition: "根据最近上传时间排序的列表页",
          icon: "icon-shouye",
          path: "/home/blog",
          id: 1
        },
        {
          name: "文章分类",
          descrition: "根据文章类型进行分类的标签列表页",
          icon: "icon-jishiben",
          path: "/home/article",
          id: 2
        },
        {
          name: "历史记录",
          descrition: "文章上传或更新内容信息记录展示页面",
          icon: "icon-rili",
          path: "/home/history",
          id: 3
        },
        {
          name: "个人",
          descrition: "博主职业生涯履历",
          icon: "icon-lianxiren",
          path: "/home/mine",
          id: 4
        }
      ]
    };
  }
};
</script>

<template>
  <div class="navigation">
    <div class="user-picture">
      <img
        :src="imgSrc"
        alt="博主的头像你无法看见"
      >
    </div>
    <ul class="menu">
      <li
        v-for="item in navigationData"
        :key="item.id"
      >
        <router-link
          :to="item.path"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use
              :xlink:href="`#${item.icon}`"
            />
          </svg>
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
@import '~css/variable.stylus'
.navigation
  display flex
  flex-direction column
  align-items center
  .user-picture
    width 200px
    height 200px
    box-shadow -3px -1px 15px 1px black
    border-radius 50%
    overflow hidden
    img
      width 100%
      height 100%
  .menu
    margin-top 35px
    li
      transition all 0.2s
      font-size 20px
      a
        display flex
        align-items center
        text-decoration none
        i
          font-size 16px
      &:hover
        color #b90909c7
        font-size 35px
</style>
