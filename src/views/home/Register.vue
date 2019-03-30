<template>
  <div class="account-page">
    <div class="header">
      <div class="center">
        <router-link to="/" class="logo left">
          <img src="@/assets/images/logo.png" alt>
        </router-link>
        <p class="right title-text">注册</p>
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
          <el-form-item label="确认密码">
            <el-input v-model="form.cofpassword" type="password" placeholder="请再次输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="btn-box">
          <el-button type="success" @click="submit">注册</el-button>
          <el-button @click="$router.push('/login')">去登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
          cofpassword: ''
        }
      }
    },
    methods: {
      submit() {
        let that = this 
        let {
          name,
          password,
          cofpassword
        } = this.form
        if (!name.length) {
          that.$message.error('请填写用户名')
          return false
        }
        if (!password.length) {
          that.$message.error('请填写密码')
          return false
        }
        if (password !== cofpassword) {
          that.$message.error('两次密码不一致')
          return false
        }
        that.$store.commit('userReg',{name,password})
        that.$alert('注册成功，点击确定跳转登录页', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            that.$router.replace('/login')
          }
        });
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