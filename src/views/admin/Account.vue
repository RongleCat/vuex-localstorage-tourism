<template>
  <div class="color-block">
    <div class="el-form-item">
      <el-button type="primary" @click="dialogVisible = true">添加管理员</el-button>
    </div>
    <el-table :data="adminUser" border style="width: 100%">
      <el-table-column prop="name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="password" label="密码">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="userDelete(scope.row.name)" type="text" size="small">删除</el-button>
          <el-button @click="userEdit(scope.row)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加管理员" :visible.sync="dialogVisible" width="400px" @close="popClose">
      <el-form>
        <el-form-item label="账号">
          <el-input type="text" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="addForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAdminUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    data() {
      return {
        dialogVisible: false,
        addForm: {
          name: '',
          password: ''
        },
        adminName: window.localStorage.getItem('adminName'),
        is_edit: null
      }
    },
    computed: {
      ...mapState(['adminUser'])
    },
    methods: {
      popClose() {
        this.addForm.name = ''
        this.addForm.password = ''
      },
      addAdminUser() {
        let {
          name,
          password
        } = this.addForm
        if (!name.length) {
          this.$message.error('请填写用户名')
          return false
        }
        if (!password.length) {
          this.$message.error('请填写密码')
          return false
        }
        this.dialogVisible = false
        if (!this.is_edit) {
          this.$store.commit('adminReg', {
            name,
            password
          })
          this.$alert('管理员添加成功', '提示', {
            confirmButtonText: '确定'
          });
        } else {
          this.$store.commit('adminEdit', {
            change: this.is_edit,
            item: {
              name,
              password
            }
          })
        }

      },
      userDelete(name) {
        if (this.adminName === name) {
          this.$message.error('不能删除当前管理员')
          return false
        }
        this.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('adminRemove', name)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          console.log('取消删除');
        });
      },
      userEdit(o) {
        let item = JSON.parse(JSON.stringify(o))
        this.is_edit = item.name
        this.addForm = item
        this.dialogVisible = true
      }
    }
  }
</script>

<style scoped>

</style>