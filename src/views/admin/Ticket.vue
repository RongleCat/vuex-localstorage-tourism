<template>
  <div class="color-block">
    <el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'addTime', order: 'descending'}">
      <el-table-column prop="addTime" label="提交预约时间" width="180">
        <template slot-scope="scope">
          {{scope.row.addTime|dataFormat('YYYY-MM-DD HH:mm:ss')}}
        </template>
      </el-table-column>
      <el-table-column prop="jingdian" label="预约景点" width="180">
      </el-table-column>
      <el-table-column label="门票时间" width="120">
        <template slot-scope="scope">
          {{scope.row.time|dataFormat}}
        </template>
      </el-table-column>
      <el-table-column prop="man1" label="成人数" width="120">
      </el-table-column>
      <el-table-column prop="man2" label="儿童数" width="120">
      </el-table-column>
      <el-table-column prop="name" label="联系人姓名" width="140">
      </el-table-column>
      <el-table-column prop="phone" label="联系人电话" width="140">
      </el-table-column>
      <el-table-column prop="beizhu" label="备注">
      </el-table-column>
    </el-table>
    <div class="page-box">
      <el-pagination layout="prev, pager, next" :total="ticketCount" :page-size="10" :current-page="currentPage"
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
        count: 10000,
        currentPage: 1,
        tableData: []
      }
    },
    computed: {
      ...mapGetters(['ticketCount'])
    },
    filters: {
      dataFormat(value, format = 'YYYY-MM-DD') {
        return day(value).format(format)
      }
    },
    mounted() {
      this.tableData = this.$store.getters.getTicketPage(1);
    },
    methods: {
      pageChange(page) {
        this.tableData = this.$store.getters.getTicketPage(page);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-box {
    padding-top: 20px;
  }
</style>