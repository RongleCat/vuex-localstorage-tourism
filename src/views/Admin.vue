<template>
  <el-container>
    <el-header>
      <div class="top-bar">
        <div class="admin-logo">
          朔州旅游网后台管理
        </div>
        <div class="admin-info">
          <img src="@/assets/images/head.jpg" alt="ronglecat">
          <span>
            {{adminName}}</span>
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="/admin/article">文章列表</el-menu-item>
            <el-menu-item index="/admin/article/add">添加文章</el-menu-item>
          </el-submenu>
          <el-menu-item index="/admin/ticket">
            <i class="el-icon-date"></i>
            <span slot="title">门票预定管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/hotel">
            <i class="el-icon-date"></i>
            <span slot="title">酒店预定管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/account">
            <i class="el-icon-setting"></i>
            <span slot="title">账号管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/info">
            <i class="el-icon-info"></i>
            <span slot="title">系统信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
    <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        adminName:window.localStorage.getItem('adminName')
      }
    },
    created(){
      if (!window.localStorage.getItem('adminName')) {
        this.$router.replace('/admin/login')
      }
    },
    methods: {
      handleCommand(command) {
        if (command === 'loginOut') {
          this.$store.commit('adminLogin', '')
          window.localStorage.removeItem('adminName')
          this.$router.replace('/admin/login')
        }
      }
    }
  }
</script>

<style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
    height: 100%;
  }

  #app {
    height: 100%;
    min-width: 1200px;
  }

  html,
  body,
  #__nuxt,
  #__layout {
    height: 100%;
  }

  .top-bar {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);

    .admin-logo {
      font-size: 24px;
      line-height: 60px;
      padding-left: 20px;
      color: #909399;
    }

    .admin-info {
      height: 60px;
      display: flex;
      padding-right: 20px;
      padding-top: 10px;
      line-height: 40px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      span {
        padding-right: 15px;
      }
    }
  }

  .el-container {
    border-top: 0 !important;
    height: 100%;
    background: #eef5f9;
  }

  .el-header {
    padding: 0;
  }

  .el-dropdown {
    i[class^='el-icon'] {
      font-size: 20px;
      vertical-align: -2px;
    }
  }

  .top-block {
    line-height: 40px;
    align-items: center;
    color: #666;

    .iconfont {
      font-size: 28px;
      padding-right: 15px;
      color: inherit;
      opacity: 0.8;
    }

    span {
      padding: 0 5px;
    }
  }

  .el-main {
    height: 100%;
  }

  .v-note-wrapper {
    border-radius: 4px;

    .v-note-op {
      border-radius: 4px 4px 0 0;
    }

    .v-note-panel {
      border-radius: 0 0 4px 4px;
      min-height: calc(100vh - 243px);
    }
  }

  .el-tag--mini {
    margin-left: 4px;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }
  }

  .el-header {
    padding: 0 !important;
    overflow: auto;

    .top-bar {
      border-bottom: 1px solid #f0f0f0;
    }
  }
</style>