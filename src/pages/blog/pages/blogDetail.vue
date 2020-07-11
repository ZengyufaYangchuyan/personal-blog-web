<script>
const {formatDate} = require('js/format');
export default {
  data () {
    return {
      blogData: {
        title: '多边形的音乐动效',
        id: 7,
        tag: [
          {
            icon: 'icon-zhuti',
            id: 1,
            title: 'js'
          },
          {
            icon: 'icon-zhuti',
            id: 2,
            title: '编程'
          }
        ],
        createDate: new Date(),
        lastUpDate: new Date(),
        content: '<div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div>',
        nextBlog: {
          id: 2,
          title: '下一篇博客1'
        },
        prevBlog: {
          id: 3,
          title:'上一篇博客名字2，上一篇博客名字2，上一篇博客名字2'
        }
      }
    };
  },
  methods: {
    formatDate,
    /**
     * 切换博客文章
     * @param {Number} id 博客id
     */
    showBlog: function (id) {
      console.log(id);
    }
  }
};
</script>

<template>
  <div class="blog-detail">
    <div class="header">
      <div class="title">
        {{ blogData.title }}
      </div>
      <div class="line" />
      <ul class="tag-ul">
        <li
          v-for="item in blogData.tag"
          :key="item.id"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use
              :xlink:href="`#${item.icon}`"
            />
          </svg>
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div
      class="content"
      v-html="blogData.content"
    />
    <div class="time">
      <span>
        创建于：
        {{ formatDate(blogData.createDate) }}
      </span>
      <span>
        更新于：
        {{ formatDate(blogData.lastUpDate) }}
      </span>
    </div>
    <div class="blog-quicke-view">
      <div
        v-if="blogData.prevBlog"
        :title="blogData.prevBlog.title"
        class="prev text-ellipsis"
        @click="showBlog(blogData.prevBlog.id)"
      >
        {{ blogData.prevBlog.title }}
      </div>
      <div
        v-if="blogData.nextBlog"
        :title="blogData.nextBlog.title"
        class="next text-ellipsis"
        @click="showBlog(blogData.nextBlog.id)"
      >
        {{ blogData.nextBlog.title }}
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '~css/variable.stylus';
$blogMargin = 25px
.blog-detail
  getBlogWindowStyle(90%, #f6f6f6)
  margin $blogMargin auto $blogMargin
  // min-height 'calc(100% - 2 * %s)' % $blogMargin
  &>.header
    &>.title
      getBlogTitleStyle()
      font-size 25px
      height 60px
      display flex
      align-items center
      justify-content center
    &>.line
      getLineStyle()
    &>.tag-ul
      height 45px
      width $blogContentWidth
      display flex
      justify-content flex-start
      margin auto
      li
        getTagTextStyle()
        display flex
        align-items center
        margin-right 10px
  .content
    width $blogContentWidth
    margin 10px auto 10px
  &>.time
    width $blogContentWidth
    margin 0 auto 10px
    display flex
    justify-content space-between
    align-items center
    height 45px
    font-size 13px
    color $blogTagTextColor
 &>.blog-quicke-view
    color $blogTitleColor
    display flex
    justify-content space-between
    width $blogContentWidth
    margin auto
    padding-bottom 25px
    div
      width 200px
      cursor pointer
      &:hover
        getBlogTitleStyle()
    .prev
      text-align left
    .next
      text-align right
</style>
