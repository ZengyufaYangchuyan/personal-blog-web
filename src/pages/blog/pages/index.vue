<script>
const {formatDate} = require('js/format.js');
export default {
  data () {
    return {
      blogData: [
        {
          title: '多边形的音乐动效',
          id: 1,
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
          content: '<div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div><div>12321312321 <strong>strong</strong> <code>code</code></div>'
        }
      ]
    };
  },
  methods: {
    formatDate,
    /**
     * @function 查看博客详情
     * @param {Number} id
     */
    checkBlog: function (id) {
      this.$router.push({
        path: '/home/blog-detail',
        query: {
          id
        }
      });
    }
  }
};
</script>

<template>
  <ul class="blog-ul">
    <li
      v-for="item in blogData"
      :key="item.id"
      class="item"
    >
      <div class="header">
        <div class="title text-ellipsis">
          {{ item.title }}
        </div>
        <div class="time">
          <div class="text-ellipsis">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use
                xlink:href="#icon-shijian"
              />
            </svg>
            {{ formatDate(item.createDate, 'yyyy-MM-dd hh:mm:ss') }}
          </div>
          <div class="text-ellipsis">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use
                xlink:href="#icon-yinle"
              />
            </svg>
            {{ formatDate(item.lastUpDate, 'yyyy-MM-dd hh:mm:ss') }}
          </div>
        </div>
      </div>
      <div class="line" />
      <div class="content">
        <ul class="header">
          <li
            v-for="tagItem in item.tag"
            :key="tagItem.id"
          >
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use
                :xlink:href="`#${tagItem.icon}`"
              />
            </svg>
            <span>{{ tagItem.title }}</span>
          </li>
        </ul>
        <div
          class="content"
          v-html="item.content"
        />
        <div
          class="check-blog"
          @click="checkBlog(item.id)"
        >
          <span>详情 >></span>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="stylus">
@import '~css/variable.stylus';
headerMargin = 20px;
.blog-ul
  .item
    getBlogWindowStyle(90%, #f6f6f6)
    &:hover
      box-shadow 1px 1px 5px 1px #443f3f
    &>.header
      height 55px
      display flex
      justify-content space-between
      align-items center
      .title
        getBlogTitleStyle()
        margin-left headerMargin
        font-size 25px
      .time
        display flex
        margin-right headerMargin
        font-size 13px
        .icon
          width 35px
          height 35px
        &>div
          display flex
          align-items center
        &>div:nth-of-type(2)
          margin-left headerMargin
    &>.line
        getLineStyle()
    &>.content
      &>.header
        display flex
        justify-content flex-start
        align-items center
        &>li
          getTagTextStyle()
          display flex
          align-items center
          margin-left headerMargin
        .icon
          width 35px
          height 35px
      &>.content
        width 98%
        margin auto
        padding 15px 0px
        max-height 100px
        overflow hidden
      &>.check-blog
        display flex
        align-items center
        justify-content flex-end
        padding-bottom headerMargin
        span
          font-size 16px
          cursor pointer
          margin-right headerMargin
          color #7d7878
          &:hover
            color #1787ccd1
</style>
