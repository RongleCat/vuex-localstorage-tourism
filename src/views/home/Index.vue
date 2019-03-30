<template>
  <div class="index-container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide :style="{backgroundImage: `url('${img.item_1}')`}"></swiper-slide>
      <swiper-slide :style="{backgroundImage: `url('${img.item_2}')`}"></swiper-slide>
    </swiper>
    <div class="scenic-box">
      <div class="center">
        <div class="common-title">
          景点介绍
        </div>
        <div class="scenic-list">
          <div class="item">
            <router-link to="/news_detail/1">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
          <div class="item">
            <router-link to="/news_detail">
              <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
              <h3>应县木塔 </h3>
              <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce-box">
      <div class="center">
        <div class="common-title">
          朔州简介
        </div>
        <div class="introduce-content">
          <img src="@/assets/images/jieshao.png" class="left" alt="">
          <div class="text right">
            <p>
              朔州，位于中国山西省西北部，桑干河上游，西北毗邻内蒙古自治区，南扼雁门关隘，地貌轮廓总体上是北、西、南三面环山，山势较高，中间是桑乾河域冲积平原，相对较低，属温带大陆性季风气候；下辖2区、3县，1市；总面积1.07万平方公里，2017年常住人口177.6万。<br>
            </p>
            <br>
            <p>
              朔州市平均海拔1000米，寒来暑往，四季分明，是全国避暑胜地和京津地区避暑休闲的“后花园”；全市拥有各类规模的旅游景区景点80处，其中4A级景区4处、国家级水利风景区1处、国家级文物保护单位6处、省级文物保护单位19处、市级重点文物保护单位42处；历史上先后涌现出西汉著名女诗人班婕妤、三国名将张辽、唐朝开国元勋尉迟恭、明朝宰相王家屏等一批杰出人物。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 5000
          }
        },
        img: {
          item_1: require('@/assets/images/banner/banner_01.jpg'),
          item_2: require('@/assets/images/banner/banner_02.jpg'),
          item_3: require('@/assets/images/jieshao.png')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin clearfix {
    zoom: 1;

    &:after {
      content: "";
      height: 0;
      line-height: 0;
      display: block;
      visibility: hidden;
      clear: both;
    }
  }

  .center {
    width: 1200px;
    margin: 0 auto;
    @include clearfix;
  }

  .swiper-slide {
    height: 720px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .introduce-box {
    background-color: #f5fbfc;
    background-image: url('../../assets/images/index_bg.jpg');
    background-position: bottom center;
    min-height: 600px;
    background-repeat: no-repeat;
    padding-bottom: 60px;

    .left {
      width: 442px;
    }

    .right {
      padding: 0 60px;
      padding-top: 100px;
      width: 700px;
      text-indent: 2em;
    }
  }

  .common-title {
    width: 120px;
    margin: 0 auto;
    height: 120px;
    line-height: 120px;
    position: relative;
    text-align: center;
    font-size: 24px;

    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 200px;
      position: absolute;
      background: #999;
      left: -230px;
      top: 60px;
    }

    &:after {
      content: '';
      display: block;
      height: 1px;
      width: 200px;
      position: absolute;
      background: #999;
      right: -230px;
      top: 60px;
    }
  }

  .scenic-list {
    width: 1200px;
    padding-bottom: 60px;
    @include clearfix;

    .item {
      a {
        display: block;
        height: 310px;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        h3 {
          font-size: 18px;
          padding: 10px;
        }

        p {
          padding: 10px;
          padding-top: 0;
          font-size: 12px;
          color: #999;
        }
      }

      width: 285px;
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
      transition: all .2s;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
      }
    }
  }
</style>