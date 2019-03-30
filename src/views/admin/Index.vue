<template>
  <div class="color-block">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="项目" width="180">
      </el-table-column>
      <el-table-column prop="value" label="参数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import day from "dayjs";
  import {
    mapState
  } from "vuex";
  export default {
    data() {
      return {
        tableData: [{
            name: '操作系统',
            value: this.getOS()
          },
          {
            name: '系统时间',
            value: day().format('YYYY-MM-DD HH:mm:ss')
          },
          {
            name: '当前浏览器',
            value: this.bro()
          },
          {
            name: '当前管理员',
            value: window.localStorage.getItem('adminName')
          }
        ]
      }
    },
    computed: {
      ...mapState(['adminName'])
    },
    mounted() {
      let that = this
      setInterval(() => {
        that.tableData[1].value = day().format('YYYY-MM-DD HH:mm:ss')
      }, 1000);
    },
    methods: {
      getOS() {
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform ==
          "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) return "Linux";
        if (isWin) {
          var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
          if (isWin2K) return "Win2000";
          var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
          if (isWinXP) return "WinXP";
          var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
          if (isWin2003) return "Win2003";
          var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
          if (isWinVista) return "WinVista";
          var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
          if (isWin7) return "Win7";
          var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
          if (isWin10) return "Win10";
        }
        return "other";
      },
      bro() {
        let broName = 'Runing'
        let strStart = 0
        let strStop = 0
        let temp = ''
        let userAgent = window.navigator.userAgent // 包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform
        // FireFox
        if (userAgent.indexOf('Firefox') !== -1) {
          strStart = userAgent.indexOf('Firefox')
          temp = userAgent.substring(strStart)
          broName = temp.replace('/', ' 版本号')
        }
        // Edge
        if (userAgent.indexOf('Edge') !== -1) {
          /* broName = 'Edge浏览器'; */
          strStart = userAgent.indexOf('Edge')
          temp = userAgent.substring(strStart)
          broName = temp.replace('/', ' 版本号')
        }
        // IE浏览器
        if (userAgent.match(/msie ([\d.]+)/)) {
          /* broName = 'IE浏览器'; */
          let s = userAgent.match(/msie ([\d.]+)/)
          let res = 'IE ' + s[1]
          broName = res + res.replace(/[^0-9.]/ig, '')
        }
        // 360极速模式可以区分360安全浏览器和360极速浏览器
        if (userAgent.indexOf('WOW') !== -1 && userAgent.indexOf('NET') < 0 && userAgent.indexOf('Firefox') < 0) {
          if (navigator.javaEnabled()) {
            broName = '360安全浏览器-极速模式'
          } else {
            broName = '360极速浏览器-极速模式'
          }
        }
        // 360兼容
        if (userAgent.indexOf('WOW') !== -1 && userAgent.indexOf('NET') !== -1 && userAgent.indexOf('MSIE') !== -1 &&
          userAgent.indexOf('rv') < 0) {
          broName = '360兼容模式'
        }
        // Chrome浏览器
        if (userAgent.match(/Chrome\/([\d.]+)/)) {
          /* broName = 'Chrome浏览器'; */
          strStart = userAgent.indexOf('Chrome')
          strStop = userAgent.indexOf('Safari')
          temp = userAgent.substring(strStart, strStop)
          broName = temp.replace('/', ' 版本号')
        }
        // safari
        if (userAgent.match(/Version\/([\d.]+).*Safari/)) {
          strStop = userAgent.indexOf('Safari')
          temp = userAgent.substring(strStop)
          broName = temp.replace('/', ' 版本号')
        }
        // opera
        if (userAgent.match(/Opera.([\d.]+)/)) {
          strStop = userAgent.indexOf('Opera')
          temp = userAgent.substring(strStop)
          broName = temp.replace('/', ' 版本号')
        }
        return broName
      }
    }
  }
</script>

<style scoped>

</style>