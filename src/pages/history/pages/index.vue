<script>
const {formatDate} = require('js/format');
import common from 'js/common';
export default {
  data () {
    return {
      blogData: [],
      // [
      //   {
      //     year: 2020,
      //     blogList: [
      //       {
      //         title: '',
      //         createDate: new Date(),
      //         id: 1
      //       }
      //     ]
      //   }
      // ],
      orginData: [
        {
          createDate: new Date('2008/11/12'),
          title: '这是一篇2008/11/12的博客文章',
          id: 1
        },
        {
          createDate: new Date('2007/11/12'),
          title: '这是一篇2007/11/12的博客文章',
          id: 2
        },
        {
          createDate: new Date('2004/11/11'),
          title: '2004/11/11',
          id: 3
        },
        {
          createDate: new Date('2004/11/10'),
          title: '这是一篇2004/11/10/2004/11/10年的博客文章',
          id: 4
        },
        {
          createDate: new Date('2004/11/10'),
          title: '这是一篇2004/11/10/2004/11/10年的博客文章',
          id: 5
        }
      ]
    };
  },
  mounted () {
    // 获取数据
    const data = this.orginData;
    // 根据年份组装数据
    const packageYearData = this.packageYearData(data, true, 'createDate');
    this.blogData = packageYearData;
  },
  methods: {
    formatDate,
    /**
     * @function packageYearData
     * @description 排序数据
     * @param {Boolean} isDownSort 是否为降序排序
     */
    packageYearData: function (data, isDownSort, sortKey) {
      // 根据排序规则排序
      const sortData = common.sortArray({
        data,
        isDownSort,
        objectArrayDataSortKey: sortKey
      });
      // 将数据根据年份放入对象中
      let sortDataObj = {};
      sortData.forEach(item => {
        let {createDate} = item;
        let year = new Date(createDate).getFullYear();
        if (!sortDataObj[year]) {
          sortDataObj[year] = [];
        }
        sortDataObj[year].push(item);
      });
      // 将数据对象，再次转换成树级数组
      let yearKeysArr = Object.keys(sortDataObj);
      yearKeysArr = common.sortArray({
        data: yearKeysArr,
        isDownSort
      });
      console.log(yearKeysArr);
      const yearSortData = [];
      yearKeysArr.forEach(year => {
        yearSortData.push({
          year,
          blogList: sortDataObj[year]
        });
      });
      return yearSortData;
    },
    /**
     * @function
     * @description 查看博客
     * @param {Number} id 博客编号
     */
    checkBlog: function (id) {
      this.$router.push({
        path: '/home/blog-detail',
        query: {id}
      });
    }
  }
};
</script>

<template>
  <ul class="history">
    <li
      v-for="item in blogData"
      :key="item.year"
      class="year-group"
    >
      <div class="year-group-header">
        <div class="line" />
        <div class="circle" />
        <div class="year">
          {{ item.year }}
        </div>
      </div>
      <ol class="year-group-content">
        <li
          v-for="cItem in item.blogList"
          :key="cItem.id"
          :title="`时间：${formatDate(cItem.createDate)}，《${cItem.title}》`"
          class="year-item"
          @click="checkBlog(cItem.id)"
        >
          <div class="cloumn-line" />
          <div class="circle" />
          <div class="time text-ellipsis">
            {{ formatDate(cItem.createDate) }}
          </div>
          <div class="line" />
          <div class="title text-ellipsis">
            {{ cItem.title }}
          </div>
        </li>
      </ol>
    </li>
  </ul>
</template>

<style lang="stylus">
@import '~css/variable.stylus';

$historyWidth = 90%
$historylineWidth = 45px
$historyLineHeight = 3px
$historyLineMargin = 20px
$historyLineColor = orange
$historyTimeWidth = 160px
$historyTitleWidth = 250px
$historyCircleWidth = 30px
$historyLitleCircleMargin = $historyCircleWidth / 2
$historyBlogItemHeight = 60px
$historyYearTextFontSize = 18px
getHistoryCicleBaseStyle()
  background #f6f6f6
  border-radius 50%
  box-shadow 0px 0px 5px 1px #808080
getHistoryLineWdith()
  $historyCircleWidth/2 + $historylineWidth + $historyTimeWidth + $historyTitleWidth + 2 * $historyLineMargin - $historyLitleCircleMargin * 2
getBlogItemCloumnHalfLineHeight()
  $historyBlogItemHeight / 2
.history
  border-left $historyLineHeight solid $historyLineColor
  border-radius 3px
  width $historyWidth
  margin auto
  &>.year-group
    margin-top 45px
    padding-top 35px
    .year-group-header
      display flex
      align-items center
      .line
        background $historyLineColor
        height $historyLineHeight
        width $historylineWidth
        border-radius 3px
        margin unset
      .circle
        width $historyCircleWidth
        height $historyCircleWidth
        getHistoryCicleBaseStyle()
      .year
        color black
        text-shadow 1px 1px 1px black
        font-size 25px
        font-weight bold
        margin-left 15px
    .year-group-content
      margin-left $historylineWidth
      .year-item
        cursor pointer
        display flex
        align-items center
        height $historyBlogItemHeight
        position relative
        transition all .2s
        .cloumn-line
          height $historyBlogItemHeight
          width $historyLineHeight
          position absolute
          background $historyLineColor
          left $historyLitleCircleMargin
          top 0
          z-index -1
        .circle
          width 20px
          height 20px
          margin 0 $historyLitleCircleMargin 0 $historyLitleCircleMargin
          getHistoryCicleBaseStyle()
        .time
          width $historyTimeWidth
          font-size $historyYearTextFontSize
          color $historyLineColor
          text-shadow 1px 1px 1px black
          font-weight bold
          text-align center
        .line
          width 'calc(%s - %s)' % $s=$historyWidth $s=getHistoryLineWdith()
          height 1px
          background black
          margin 0 $historyLineMargin 0 $historyLineMargin
        .title
          width $historyTitleWidth
          color $historyLineColor
          text-shadow 1px 1px 1px black
          font-weight bold
          font-size $historyYearTextFontSize
          text-align left
        &:hover
          text-shadow 1px 1px 2px $historyLineColor
          .line
            box-shadow 1px 1px 2px $historyLineColor
          .circle
            box-shadow 0px 0px 5px 2px $historyLineColor
      li:nth-last-of-type(1)
        .cloumn-line
          height getBlogItemCloumnHalfLineHeight()
</style>
