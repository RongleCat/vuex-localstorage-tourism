<template>
  <div class="home-child-page">
    <div class="child-top">
      <div class="center">旅游动态</div>
    </div>
    <div class="crumbs">
      <div class="center">
        <span>
          <router-link to="/">首页</router-link>
        </span> /
        <span>旅游动态</span>
      </div>
    </div>
    <div class="scenic-list center">
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
      <div class="item">
        <router-link to="/news_detail">
          <img src="http://h2.bytravel.cn/www/2/head/2302.gif" alt="">
          <h3>应县木塔 </h3>
          <p>应县木塔位于山西大同南约70公里。它建在应县城佛宫寺的山门内，原名佛宫寺释迦塔，俗称应县木塔。</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
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

  .scenic-list {
    // margin-top: 60px;
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
      transition: all 0.2s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      &:nth-child(4n) {
        margin-right: 0;
      }

      &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .child-top {
    width: 100%;
    height: 300px;
    background-image: url("../../assets/images/bizhi_2.jpg");
    background-size: cover;
    background-position: center top;
    padding-top: 200px;
    font-size: 36px;
    color: #fff;
  }

  .crumbs {
    line-height: 80px;
    color: #999;
    font-size: 14px;

    a {
      color: #666;
    }
  }

  .home-child-page {
    background: #f5fbfc;
  }
</style>