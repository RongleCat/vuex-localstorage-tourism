<template>
  <div class="color-block">
    <el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'addTime', order: 'descending'}">
      <el-table-column prop="addTime" label="提交预约时间" width="180">
        <template slot-scope="scope">
          {{scope.row.addTime|dataFormat('YYYY-MM-DD HH:mm:ss')}}
        </template>
      </el-table-column>
      <el-table-column label="入住时间" width="120">
        <template slot-scope="scope">
          {{scope.row.dateIn|dataFormat}}
        </template>
      </el-table-column>
      <el-table-column prop="dateOut" label="退房时间" width="120">
        <template slot-scope="scope">
          {{scope.row.dateOut|dataFormat}}
        </template>
      </el-table-column>
      <el-table-column prop="number" label="入住人数" width="120">
      </el-table-column>
      <el-table-column prop="name" label="联系人姓名" width="140">
      </el-table-column>
      <el-table-column prop="phone" label="联系人电话" width="140">
      </el-table-column>
      <el-table-column prop="beizhu" label="备注">
      </el-table-column>
    </el-table>
    <div class="page-box">
      <el-pagination layout="prev, pager, next" :total="hotelCount" :page-size="10" :current-page="currentPage"
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
      ...mapGetters(['hotelCount'])
    },
    filters: {
      dataFormat(value, format = 'YYYY-MM-DD') {
        return day(value).format(format)
      }
    },
    mounted() {
      this.tableData = this.$store.getters.getHotelPage(1);
    },
    methods: {
      pageChange(page) {
        this.tableData = this.$store.getters.getHotelPage(page);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-box {
    padding-top: 20px;
  }
</style>