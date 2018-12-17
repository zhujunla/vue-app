<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShow fl"></span>
        <span class="ml10 fl">企业定位</span>
      </div>
      <div class="fr years"><span class="btn">总资产额</span>	</div>
    </div>
    <div class="mapShow">
      <div class="mapShow_bar">
       <span class="mr20 span C00a8ff">资产指标</span>
        <span class="mr20 span">利润指标</span>
        <span class="mr20 span">负债指标</span>
        <span class="mr20 span">人均指标</span>
        <span class="mr20 span">其他指标</span>
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
      var myChart = echarts.init(this.$refs.coreKPI);
      var option = {
            title: {
                
            },
            grid:{
                x:40,
                y:45,
                x2:5,
                y2:20,
            },
            xAxis: {
                type: 'category',
                data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
            tooltip: {
                formatter:'时间：{b}<br/>告警数量：{c}'
            },
            series: [{
                data:[820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                lineStyle:{
                    color:"#00a8ff",
                },
                symbol: 'none'
            },{
                data:[820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                smooth: true,
                barWidth :20,
                itemStyle: {                    
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: "rgba(6,35,62,0)"},
                                {offset: 0.5, color: "rgba(37,49,77,.5)"},
                                {offset: 1, color: "rgba(55,73,119,1)"}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#8552ff'},
                                {offset: 1, color: '#c8adfe'}
                            ]
                        )
                    }
                }
            }]
        };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="less">
</style>