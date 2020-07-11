<script>
const {formatDate} = require('js/format');
export default {
  data() {
    return {
      blogData: [
        {
          title: "分类1",
          id: 1,
          count: 6,
          article: [
            {
              title: "这是一",
              createdDate: new Date(),
              update: new Date(),
              id: 1
            },
            {
              title: "这是一个博客标题,这是一个博客标题,这是一个博客标题",
              createdDate: new Date(),
              update: new Date(),
              id: 2
            },
            {
              title: "这是一个博客标题",
              createdDate: new Date(),
              update: new Date(),
              id: 3
            }
          ]
        },
        {
          title: "分类1",
          id: 2,
          count: 6,
          article: [
            {
              title: "这是一个博客标题这是一个博客标题这是一个博客标题",
              createdDate: new Date(),
              update: new Date(),
              id: 1
            }
          ]
        },
        {
          title: "分类1",
          id: 3,
          count: 6,
          article: [
            {
              title: "这是一个博客标题这是一个博客标题",
              createdDate: new Date(),
              update: new Date(),
              id: 1
            }
          ]
        },
        {
          title: "分类1",
          id: 4,
          count: 6,
          article: [
            {
              title: "这是一",
              createdDate: new Date(),
              update: new Date(),
              id: 1
            }
          ]
        },
        {
          title: "分类1",
          id: 5,
          count: 6,
          article: [
            {
              title: "123",
              createdDate: new Date(),
              update: new Date(),
              id: 1
            }
          ]
        }
      ],
      activeTab: {
        id: 1,
        index: 0
      }
    };
  },
  methods: {
    formatDate,
    /**
     * @function
     * @description 设置选中的tab
     * @param {Number} id 编号
     * @param {Number} index 数组下标
     */
    selectArctileTab: function (id, index) {
      this.activeTab.id = id;
      this.activeTab.index = index;
    },
    /**
     * @function
     * @description 跳转到博客详情页面
     */
    turnToBlog: function (id) {
      console.log(id);
      this.$router.push({
        path: '/home/blog-detail',
        query: {id}
      });
    }
  }
};
</script>

<template>
  <div class="article">
    <ul class="article-tab">
      <li
        v-for="(item, index) in blogData"
        :key="item.id"
        :class="{'active': item.id === activeTab.id}"
        @click="selectArctileTab(item.id, index)"
      >
        {{ item.title }}
        <span class="count">({{ item.count }})</span>
      </li>
    </ul>
    <ul
      class="article-content"
    >
      <template
        v-if="activeTab.index !== null"
      >
        <li
          v-for="item in blogData[activeTab.index].article"
          :key="item.id"
          :title="item.title"
          @click="turnToBlog(item.id)"
        >
          <span
            class="title text-ellipsis"
          >{{ item.title }}</span>
          <div class="line" />
          <div class="time">
            <div>
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use
                  xlink:href="#icon-shijian"
                />
              </svg>
              {{ formatDate(item.createdDate) }}
            </div>
            <div>
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use
                  xlink:href="#icon-yinle"
                />
              </svg>
              {{ formatDate(item.update) }}
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="stylus">
@import '~css/variable.stylus'
$lineMargin = 20px
$timeWidth = 300px
$titleWidth = 150px
$articleContentMarginWidth = 10px
.article
  // width 90%
  // margin 15px auto 0px
  &>.article-tab
    display flex
    align-items center
    width 90%
    margin 25px auto 25px
    height 80px
    &>li
      padding 15px
      margin-right 10px
      border-radius 10px
      cursor pointer
      background $blogBackground
      color black
      box-shadow -2px -2px 3px 1px rgba(191,181,181,0.922)
      getBaseTransitionTime()
      &:hover
        box-shadow 0 0 5px 1px #443f3f
        text-shadow 1px 1px 2px rgba(191,181,181,0.922)
        padding 25px
      span
        margin-left 1px
    .active
      box-shadow 0 0 5px 1px #443f3f
      text-shadow 1px 1px 2px rgba(191,181,181,0.922)
      padding 25px
  &>.article-content
    display flex
    flex-direction column
    getBlogWindowStyle(90%, $blogBackground)
    padding 10px
    box-shadow 0px 0px 4px 2px #999
    &>li
      display flex
      align-items center
      width 98%
      margin auto
      cursor pointer
      margin-bottom 10px
      getBaseTransitionTime()
      .title
        color $blogTitleColor
        width $titleWidth
        text-align right
      .line
        margin 0px $lineMargin 0px $lineMargin
        width 'calc(100% - %s )' % $1=2*$lineMargin, $2=$titleWidth+$titleWidth+2*$articleContentMarginWidth
        height 1px
        background grey
      .time
        width $timeWidth
        display flex
        flex-direction column
        span:nth-of-type(1)
          margin-bottom 10px
        &>div
          display flex
          justify-content space-around
          align-items center
      &:hover
        text-shadow 1px 1px 1px grey
        box-shadow: 3px 3px 2px 1px #999;
        border-radius: 5px;
        .line
          box-shadow 1px 1px 1px grey
</style>
