<template>
  <div class="home-child-page">
    <div class="child-top">
      <div class="center">联系我们</div>
    </div>
    <div class="crumbs">
      <div class="center">
        <span>
          <router-link to="/">首页</router-link>
        </span> /
        <span>联系我们</span>
      </div>
    </div>
    <div class="contact-body">
      <div class="center">
        <p>地址：山西省朔州市朔城区房产局(矿业小区东70米) 朔州市文化和旅游局</p>
        <p>联系电话：0349-6888672</p>
        <div class="map-box" ref="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      let map = new BMap.Map(this.$refs.map); // 创建Map实例
      var point = new BMap.Point(112.422498, 39.324831);
      map.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(new BMap.MapTypeControl({ //添加地图类型控件
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }));
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.centerAndZoom(point, 15);
      var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "朔州市朔城区文物旅游局", // 信息窗口标题
      }
      var infoWindow = new BMap.InfoWindow("地址：山西省朔州市朔城区房产局(矿业小区东70米)", opts); // 创建信息窗口对象 
      map.setCurrentCity("朔州"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.openInfoWindow(infoWindow, point); //开启信息窗口
      marker.addEventListener("click", function () {
        
      });
    }
  };
</script>

<style lang="scss" scoped>
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

  .home-child-page {
    background: #f5fbfc;
  }

  .map-box {
    width: 100%;
    height: 600px;
    margin-top: 30px;
  }

  .home-child-page {
    padding-bottom: 80px;
  }

  p {
    font-size: 14px;
    line-height: 2;
  }
</style>