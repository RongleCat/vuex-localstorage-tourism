<template>
  <div class="color-block">
    <el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'addTime', order: 'descending'}">
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column prop="className" label="所属分类" width="120">
      </el-table-column>
      <el-table-column prop="addTime" label="添加时间" width="180">
        <template slot-scope="scope">
          {{scope.row.addTime|dataFormat('YYYY-MM-DD HH:mm:ss')}}
        </template>
      </el-table-column>
      <el-table-column prop="edit" label="责任编辑" width="140">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="aritcleDelete(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-box">
      <el-pagination layout="prev, pager, next" :total="articleCount" :page-size="10" :current-page="currentPage"
        @current-change="pageChange" background>
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from "vuex";
  import day from "dayjs";
  export default {
    data() {
      return {
        tableData: [],
        currentPage: 1
      }
    },
    filters: {
      dataFormat(value, format = 'YYYY-MM-DD') {
        return day(value).format(format)
      }
    },
    computed: {
      ...mapGetters(['articleCount'])
    },
    mounted() {
      this.tableData = this.$store.getters.getArticlePage(1);
    },
    methods: {
      pageChange(page) {
        this.tableData = this.$store.getters.getArticlePage(page);
        this.currentPage = page
      },
      aritcleDelete(id) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('removeArtice', id)
          this.tableData = this.$store.getters.getArticlePage(1);
          this.currentPage = 1
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          console.log('取消删除');
        });

      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-box {
    padding-top: 20px;
  }
</style>