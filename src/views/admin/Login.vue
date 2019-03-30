<template>
  <div class="admin-login">
    <el-button icon="el-icon-back" circle @click="$router.push('/')" class="btn-back"></el-button>
    <div class="login-box color-block">
      <el-form>
        <el-form-item label="管理员账号">
          <el-input type="text" v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="管理员密码">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="btn-login" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
  export default {
    data(){
      return {
        form:{
          name:'',
          password:''
        }
      }
    },
    computed:{
      ...mapState(['adminUser'])
    },
    methods:{
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
        this.adminUser.forEach(item => {
          if (item.name === name) {
            if (item.password === password) {
              state = true
            }
          }
        })
        if (state) {
          this.$message.success('登录成功')
          let that = this
          that.$store.commit('adminLogin',name)
          window.localStorage.setItem('adminName',name)
          setTimeout(() => {
            that.$router.replace('/admin')
          }, 2000);
        }else{
          this.$message.error('账号或密码错误')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-login {
    height: 100%;
    background-image: linear-gradient(50deg, #4facfe 0%, #00f2fe 80%, #00f2fe 100%);
  }

  .login-box {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn-login{
    width: 100%;
  }
  .btn-back{
    position: absolute;
    top:50px;
    left: 50px;
  }
</style>