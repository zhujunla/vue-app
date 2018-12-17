<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShow fl"></span>
        <span class="ml10 fl">互联网数据</span>
      </div>
      <div class="fr years"><span class="btn">数据采集</span>	</div>
    </div>
    <div class="mapShow">
      <div ref="coreKPI" class="coreKPI"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "coreKPI",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.newCharts();
  },
  methods: {
    newCharts: function() {
      // console.info(this.$refs.coreKPI)
      var myChart = echarts.init(this.$refs.coreKPI);
      var option = {
        // title: {
        //   text: "堆叠区域图"
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        // legend: {
        //   data: ["搜索引擎"],
        //   textStyle:{
        //             color:"#53728f"
        //         }
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
                type: 'category',
                data: ['2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-08','2018-09','2018-10','2018-11','2018-12'],
                nameTextStyle:{
                    color:'#acbbc8'
                },
                
                axisLine:{
                    lineStyle:{
                        color:'#acbbc8'
                    }
                }
            },
            yAxis: {
                type: 'value',
                nameTextStyle:{
                    color:'#acbbc8'
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(49, 62, 87,1)'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#acbbc8'
                    }
                }
            },
        series: [
          {
            name: "搜索引擎",
            type: "line",
            smooth: true,
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
                normal: {
                    color: '#17c5ff'
                }
            },
            stack: 'a',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#17c5ff'
                    }, {
                        offset: 1,
                        color: '#303a4e'                        
                    }])
                }
            },
            data:[620, 532, 201, 734, 1590, 1030, 1220, 901, 934, 1290, 1330, 1320],
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="less">
</style>