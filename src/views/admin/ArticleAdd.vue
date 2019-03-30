<template>
  <div class="color-block">
    <el-row :gutter="20">
      <el-col :span="9">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="6">
        <el-select v-model="form.className" placeholder="请选择所属分类">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-input v-model="form.edit" placeholder="请输入责任编辑姓名"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="success" class="btn-submit" @click="btnSave">保存文章</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="editor" class="editor"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import E from "wangeditor";
  import day from "dayjs";
  export default {
    data() {
      return {
        form: {
          title: "",
          edit: "",
          className: "",
          content: ""
        },
        options: [{
            value: "景点介绍",
            label: "景点介绍"
          },
          {
            value: "特产美食",
            label: "特产美食"
          },
          {
            value: "旅游动态",
            label: "旅游动态"
          }
        ]
      };
    },
    mounted() {
      let that = this;
      let editor = new E("#editor");
      editor.customConfig.onchange = html => {
        that.form.content = html;
        console.log(that.form.content);
      };
      editor.create();

      var size = 0;
      for (let item in window.localStorage) {
        if (window.localStorage.hasOwnProperty(item)) {
          size += window.localStorage.getItem(item).length;
        }
      }
      console.log('当前localStorage剩余容量为' + (size / 1024).toFixed(2) + 'KB');
    },
    methods: {
      pageChange(page) {
        console.log(page);
      },
      btnSave() {
        let {
          title,
          edit,
          className,
          content
        } = this.form;
        if (!title) {
          this.$message.error("请填写标题");
          return false;
        }
        if (!className) {
          this.$message.error("请选择所属分类");
          return false;
        }
        if (!edit) {
          this.$message.error("请填写责任编辑姓名");
          return false;
        }
        if (!content) {
          this.$message.error("请填写文章内容");
          return false;
        }
        let id = Math.random().toString(36).substr(2);
        let addTime = day().valueOf()
        this.$store.commit('addArticle', {
          title,
          edit,
          className,
          content,
          id,
          addTime
        })
        let that = this
        // this.$alert('文章保存成功', '提示', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     that.$router.replace('/admin/article')
        //   }
        // });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .page-box {
    padding-top: 20px;
  }

  .btn-submit {
    width: 100%;
  }

  .editor {
    margin-top: 20px;
  }
</style>