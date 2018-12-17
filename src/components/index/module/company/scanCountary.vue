<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShow fl"></span>
        <span class="ml10 fl">国资监管平台</span>
      </div>
      <div class="fr years"><span class="btn">2018</span></div>
    </div>
    <div class="mapShow">
      <div class="mapShow_bar">
        <span class="mr10 span C00a8ff">商业属性</span>
        <span class="mr10 span">经营状态</span>
        <span class="mr10 span">资产重组</span>
        <span class="mr10 span">混改方向</span>
        <span class="mr10 span">绩效评价</span>
        <span class="mr10 span">特殊增强</span>        
      </div>
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
      var counts = [154,784,745,774,458,659]
      var myChart = echarts.init(this.$refs.coreKPI);
      var option = {
            // title: {
            //     text: '告警级别分析',
            //     left:'left',
            //     textStyle: {
            //         color: '#00a8ff',
            //         fontWeight:'normal',
            //         fontSize:'14'
            //     }
            // },
            grid:{
                x:100,
                y:75,                
            },
            tooltip: {
                formatter:'{b}'
            },
            color: ['#00a8ff', '#d33efb', '#31ddfb', '#7bd540','#dfe55f',  '#0071ff', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            radar: {
                name: {
                    textStyle: {
                        color: '#eeeeee',
                        borderRadius: 3,
                   }
                },
                // label:{
                //     fomatter:'{a}'
                // },
                indicator: [
                //    { name: '告警总数', max:totalWarmsN},
                { name: '竞争类', max: 2000},
                   { name: '艺术类', max: 2000},
                   { name: '教育类', max: 2000},
                   { name: '功能类', max: 2000},
                   { name: '经融类', max: 2000},
                   
                   
                ],
                splitNumber: 3,
                splitArea: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            '#2D4E68'
                        ].reverse()
                    }
                },
                axisLine: {
                    lineStyle: {
                        color:'#2D4E68'
                    }
                }
            },
            series: [{
                name: '告警统计',
                type: 'radar',
                symbol: 'none', 
                lineStyle: {
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }  
                },
                
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                },
                data : [
                    {
                        value : [counts[1],counts[2],counts[3],counts[4],counts[5]]                                      
                    }
                ]
            }]
        };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="less">
</style>