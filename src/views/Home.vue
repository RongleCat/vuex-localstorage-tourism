<template>
  <div class="home-container">
    <div class="top-bar">
      <div class="center">
        <div class="left">
          <span>客服热线:400-400-5258</span>
        </div>
        <div class="right">
          <template v-if="!loginName">
            <router-link to="/login">登录</router-link> |
            <router-link to="/register">注册</router-link>
          </template>
          <template v-else>
            {{loginName}} |
            <el-button type="text" @click="loginOut">退出</el-button>
          </template>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="center">
        <router-link to="/" class="logo left">
          <img src="@/assets/images/logo.png" alt>
        </router-link>
        <nav class="right">
          <router-link tag="div" class="item" to="/" exact>
            <a>首页</a>
          </router-link>
          <router-link tag="div" class="item" to="/dynamic">
            <a>旅游动态</a>
          </router-link>
          <router-link tag="div" class="item" to="/food">
            <a>朔州美食</a>
          </router-link>
          <router-link tag="div" class="item" to="/ticket">
            <a>门票预订</a>
          </router-link>
          <router-link tag="div" class="item" to="/hotel">
            <a>酒店预订</a>
          </router-link>
          <router-link tag="div" class="item" to="/contact">
            <a>联系我们</a>
          </router-link>
        </nav>
      </div>
    </div>
    <!-- <transition name="page"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <div class="footer">
      <div class="center">
        <article>
          <ul>
            <li>
              <span>新闻资讯</span>
              <a href="#" title="朔州动态">朔州动态</a>
              <a href="#" title="旅游资讯">旅游资讯</a>
            </li>
            <li>
              <span>景点介绍</span>
              <a href="#" title="景点介绍">景点介绍</a>
              <a href="#" title="旅游攻略">旅游攻略</a>
            </li>
            <li>
              <span>酒店住宿</span>
              <router-link to="/hotel" title="在线订房">在线订房</router-link>
              <router-link to="/hotel" title="在线订餐">在线订餐</router-link>
            </li>
            <li>
              <span>特产美食</span>
              <a href="#" title="特色小吃">特色小吃</a>
            </li>
            <li>
              <span>关于古镇</span>
              <a href="#" title="简介">简介</a>
            </li>
            <li>
              <span>管理中心</span>
              <router-link to="/admin/login">管理后台</router-link>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    computed: {
      ...mapState(['loginName'])
    },
    methods:{
      loginOut(){
        this.$store.commit('userLogin','')
      }
    }
  };
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

  .home-container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;

    .top-bar {
      height: 40px;
      line-height: 40px;
      color: #999;
      font-size: 12px;
      background: #f5f5f5;
      border-bottom: 1px solid #f0f0f0;

      a {
        transition: color 0.2s;

        &:hover {
          color: #777;
        }
      }
    }

    .header {
      .logo {
        display: block;
        height: 88px;
        padding-top: 19px;
      }
    }
  }

  nav {
    .item {
      float: left;
      position: relative;
      @include clearfix;

      a {
        display: block;
        line-height: 88px;
        padding: 0 30px;
      }

      &:before {
        display: block;
        content: "";
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(18, 165, 97);
        opacity: 0;
        transition: all 0.2s;
      }

      &:not(.router-link-active):hover {
        &:before {
          opacity: 0.5;
        }
      }

      &.router-link-active:before {
        opacity: 1;
      }
    }
  }

  .footer {
    background: #2e3031;
  }

  .footer {
    background: #2e3031;
    padding: 80px 0px;
    overflow: hidden;
  }

  .footer article {
    display: block;
    width: 1210px;
    overflow: hidden;
    margin: 0 auto;
    color: #999;
  }

  .footer article ul {
    display: block;
    width: 100%;
    float: left;
    font-size: 14px;
    line-height: 35px;
  }

  .footer article ul li {
    display: block;
    width: 200px;
    float: left;
    overflow: hidden;
  }

  .footer article ul li span {
    display: block;
    height: 50px;
    font-size: 14px;
    background: url("../assets/images/index_ft.jpg") no-repeat left bottom;
  }

  .footer article ul li a {
    display: block;
    font-size: 12px;
    height: 35px;
    line-height: 35px;
    color: #999 !important;
  }

  .footer article ul li a:hover {
    color: #fff !important;
  }

  .footer article aside {
    display: block;
    width: 290px;
    height: 207px;
    float: right;
    text-align: right;
  }

  .footer article aside span {
    display: inline-block;
    width: 125px;
    margin-left: 15px;
    line-height: 30px;
    text-align: center;
  }
  .el-button--text{
    font-size: 12px;
  }
</style>