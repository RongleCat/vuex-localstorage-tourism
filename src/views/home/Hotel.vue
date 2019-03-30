<template>
  <div class="home-child-page">
    <div class="child-top">
      <div class="center">酒店预订</div>
    </div>
    <div class="crumbs">
      <div class="center">
        <span>
          <router-link to="/">首页</router-link>
        </span> /
        <span>酒店预订</span>
      </div>
    </div>
    <div class="center">
      <div class="color-block">
        <el-form ref="form" :model="form" label-width="90px">
          <el-row class :gutter="20">
            <el-col :span="8">
              <el-form-item label="入住时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.dateIn" style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="退房时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.dateOut" style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="入住人数">
                <el-select v-model="form.number" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class :gutter="20">
            <el-col :span="8">
              <el-form-item label="联系人姓名">
                <el-input v-model="form.name" placeholder="请输入联系人姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="联系方式">
                <el-input v-model="form.phone" placeholder="请输入手机号码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class :gutter="20">
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input type="textarea" :rows="18" placeholder="请输入内容" v-model="form.beizhu"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="center-content">
          <el-button type="success" @click="submit">确认预订</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import day from "dayjs";
  export default {
    data() {
      return {
        form: {
          dateIn: '',
          dateOut: '',
          beizhu: '',
          name: '',
          phone: '',
          number: ''
        },
        options: [{
            value: "1",
            label: "1位"
          },
          {
            value: "2",
            label: "2位"
          },
          {
            value: "3",
            label: "3位"
          },
          {
            value: "4",
            label: "4位"
          },
          {
            value: "5位及以上",
            label: "5位及以上"
          }
        ],
        value: ""
      }
    },
    methods: {
      submit() {
        let {
          dateIn,
          dateOut,
          name,
          number,
          phone,
          beizhu
        } = this.form
        if (!dateIn) {
          this.$message.error('请选择入住时间')
          return false
        }
        if (!dateOut) {
          this.$message.error('请选择退房时间')
          return false
        }
        if (!number) {
          this.$message.error('请选择入住人数')
          return false
        }
        if (!name) {
          this.$message.error('请填写联系人姓名')
          return false
        }
        if (!phone) {
          this.$message.error('请填写联系人号码')
          return false
        }

        let that = this

        let id = Math.random().toString(36).substr(2);
        let addTime = day().valueOf()
        that.$store.commit('addHotel', {
          id,
          dateIn,
          dateOut,
          name,
          number,
          phone,
          beizhu,
          addTime
        })

        this.$alert('预定成功，稍后将会有包含预定信息的短信发送到' + phone + '号码，请注意查收。', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            that.$router.replace('/')
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home-child-page {
    padding-bottom: 80px;
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

  .textarea {
    textarea {
      height: 300px !important;
    }
  }

  .center-content {
    text-align: center;

    button {
      width: 200px;
    }
  }
</style>