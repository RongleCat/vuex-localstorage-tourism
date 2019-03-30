<template>
  <div class="account-page">
    <div class="header">
      <div class="center">
        <router-link to="/" class="logo left">
          <img src="@/assets/images/logo.png" alt>
        </router-link>
        <p class="right title-text">登录</p>
      </div>
    </div>
    <div class="center">
      <div class="color-block">
        <el-form>
          <el-form-item label="账号">
            <el-input v-model="form.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="btn-box">
          <el-button type="success" @click="submit">登录</el-button>
          <el-button @click="$router.push('/register')">去注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    data() {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapState([
        'user'
      ])
    },
    methods: {
      submit() {
        let {
          name,
          password
        } = this.form
        if (!name.length) {
          this.$message.error('请填写用户名')
          return false
        }
        if (!password.length) {
          this.$message.error('请填写密码')
          return false
        }
        let state = false
        this.user.forEach(item => {
          if (item.name === name) {
            if (item.password === password) {
              state = true
            }
          }
        })
        if (state) {
          this.$message.success('登录成功')
          let that = this
          that.$store.commit('userLogin',name)
          setTimeout(() => {
            that.$router.replace('/')
          }, 2000);
        }else{
          this.$message.error('账号或密码错误')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .account-page {
    height: 100vh;
    overflow-y: auto;
    background: #f5fbfc;
    background-image: url('../../assets/images/index_bg.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  .header {
    background: #fff;

    .logo {
      display: block;
      height: 88px;
      padding-top: 19px;
    }

    .title-text {
      font-size: 24px;
      color: #666;
      line-height: 88px;
    }
  }

  .color-block {
    margin: 60px auto;
    width: 500px;
  }

  .btn-box {
    text-align: right;
  }
</style>