<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShowW fl"></span>
        <span class="ml10 fl">风险处理进度</span>
      </div>
      <!-- <div class="fr years">2018</div> -->
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
            //     text: '两学一做完成情况',
            //     left:'left',
            //     textStyle: {
            //         color: '#acbbc8',
            //         fontWeight:'normal',
            //         fontSize:'14'
            //     }
            // },
            legend: {
                data:['风险事件','未处理',"已处理"],
                left:'right',
                textStyle:{
                    color:"#53728f"
                }
            },
            grid:{
                x:40,
                y:45,
                x2:5,
                y2:20,
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
            tooltip: {
                formatter:'时间：{b}<br/>{a}：{c}'
            },
            series: [{
                data:[820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
                type: 'line',
                name:"已处理",
                color:["#39D7BF"],
                smooth: true,
                lineStyle:{
                    color:"#39D7BF",
                },
                // symbol: 'none'
            },{
                data:[620, 532, 201, 734, 1590, 1030, 1220, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                name:'未处理',
                smooth: true,
                barWidth :10,
                itemStyle: {                    
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#16c6ff'},
                                {offset: 1, color: '#8c65fc'}
                            ]
                        )
                    }                    
                }
            },{
                data:[820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                name:'风险事件',
                smooth: true,
                barWidth :10,
                itemStyle: {                    
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#e7c9ff'},
                                {offset: 1, color: '#cd79ff'}
                                
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