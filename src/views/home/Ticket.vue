<template>
  <div class="home-child-page">
    <div class="child-top">
      <div class="center">门票预订</div>
    </div>
    <div class="crumbs">
      <div class="center">
        <span>
          <router-link to="/">首页</router-link>
        </span> /
        <span>门票预订</span>
      </div>
    </div>
    <div class="center">
      <div class="color-block">
        <el-form ref="form" :model="form" label-width="90px">
          <el-row class :gutter="20">
            <el-col :span="8">
              <el-form-item label="预约景点">
                <el-select v-model="form.jingdian" placeholder="请选择">
                  <el-option v-for="item in jingdian" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
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
            <el-col :span="8">
              <el-form-item label="预订时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="成人">
                <el-select v-model="form.man1" placeholder="请选择">
                  <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="儿童">
                <el-select v-model="form.man2" placeholder="请选择">
                  <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
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
  import day from "dayjs"
  export default {
    data() {
      return {
        form: {
          time: '',
          man1: '',
          man2: '',
          name: '',
          phone: '',
          beizhu: '',
          jingdian: ''
        },
        options1: [{
            value: "0",
            label: "0位"
          },
          {
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
            value: "other",
            label: "4位及以上"
          }
        ],
        options2: [{
            value: "0",
            label: "0位"
          },
          {
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
            value: "other",
            label: "4位及以上"
          }
        ],
        jingdian: [{
            value: "应县木塔",
            label: "应县木塔"
          },
          {
            value: "崇福寺",
            label: "崇福寺"
          },
          {
            value: "右玉国家级生态旅游示范区",
            label: "右玉国家级生态旅游示范区"
          },
          {
            value: "平鲁北固山",
            label: "平鲁北固山 "
          },
          {
            value: "华严寺砖塔",
            label: "华严寺砖塔 "
          },
          {
            value: "李林烈士陵园",
            label: "李林烈士陵园 "
          },
          {
            value: "鲁沟旅游村",
            label: "鲁沟旅游村 "
          },
          {
            value: "西安堡古堡",
            label: "西安堡古堡 "
          },
          {
            value: "怀仁文殊塔",
            label: "怀仁文殊塔 "
          }
        ]
      };
    },
    methods: {
      submit() {
        let {
          time,
          man1,
          man2,
          name,
          phone,
          jingdian
        } = this.form
        if (!jingdian) {
          this.$message.error('请选择预约的景点')
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
        if (!time) {
          this.$message.error('请选择预定时间')
          return false
        }
        if (!man1) {
          this.$message.error('请选择成人位数')
          return false
        }
        if (!man2) {
          this.$message.error('请选择儿童位数')
          return false
        }

        let that = this
        let id = Math.random().toString(36).substr(2);
        let addTime = day().valueOf()

        that.$store.commit('addTicket', {
          id,
          time,
          man1,
          man2,
          name,
          phone,
          jingdian,
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