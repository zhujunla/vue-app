<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShow fl"></span>
        <span class="ml10 fl">国资监管平台</span>
      </div>
      <div class="fr years" style="cursor:pointer">详细列表</div>
    </div>
    <div class="mapShow">
      <div class="mapShow_left">
        <div class="left_info">
          <p class="p">168</p>
          <p class="p">企业总数量</p>
        </div>
        <div class="left_info_gray">
          <p class="p">36</p>
          <p class="p">一级企业</p>
        </div>
        <div class="left_info_gray">
          <p class="p">132</p>
          <p class="p">二级企业</p>
        </div>
      </div>
      <div ref="mapShow" class="mapHeight"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "mapShow",
  components: {},
  data() {
    return {};
  },
  mounted() {
      this.getMap();
  },
  methods: {
    getMap: function() {
      echarts.registerMap("HK", require('./mapJson/geoJson.json'));

      echarts.init(this.$refs.mapShow).setOption(
            {        
          tooltip: {
            trigger: "item",
            formatter: "{b}<br/>{c}"
          },

          series: [
            {
              name: "香港18区人口密度",
              type: "map",
              mapType: "HK", // 自定义扩展图表类型3
              roam:true,
              aspectScale:'1.5',
              zoom:1.2,
               label:{   
                  show:true
              },
            //   left:20,
            //   top:20,
            //   left:20,
            //   left:20,
            // color:"#fff",
              itemStyle:{
                    // normal: {
                // areaColor: "#366AA6",
                areaColor: "#00a8ff",
                borderColor: '#2D5D89',
                color:"#fff"
                    // }                    
                },
                emphasis:{
                    itemStyle:{
                        // areaColor: "#00a8ff",
                        // color:"#fff"
                    }                   

                },
              data: [
                { name: "大同市", value: 20057.34 } ,               
                { name: "太原市", value: 20057.34 }  ,              
                { name: "朔州市", value: 20057.34 }  ,              
                { name: "忻州市", value: 20057.34 }  ,              
                { name: "阳泉市", value: 20057.34 }  ,              
                { name: "吕梁市", value: 20057.34 }  ,              
                { name: "晋中市", value: 20057.34 }  ,              
                { name: "晋城市", value: 20057.34 }  ,              
                { name: "临汾市", value: 20057.34 }  ,              
                { name: "运城市", value: 20057.34 }                
              ]
              
            }
          ]
        }
      );
    }
  }
};
</script>
<style lang="less">
</style>