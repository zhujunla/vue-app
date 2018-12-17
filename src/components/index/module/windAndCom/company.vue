<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShowC fl"></span>
        <span class="ml10 fl">企业执行力</span>
      </div>
      <div class="fr years"><span class="btn">两学一做</span>	</div>
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
            title: {
                text: '两学一做完成情况',
                left:'left',
                textStyle: {
                    color: '#acbbc8',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            legend: {
                data:['按期完成','逾期完成'],
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
                data: ['董事会/党委会传达落实', '成立贯彻落实方案', '执行方案决策', '内部动员', '阶段性检验验收', '企业执行实施', '总体验收'],
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
                formatter:'事件：{b}<br/>{a}：{c}'
            },
            series: [{
                data:[620, 532, 201, 734, 1590, 1030, 1220],
                type: 'bar',
                name:'逾期完成',
                smooth: true,
                barWidth :10,
                itemStyle: {                    
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#4995f5'},
                                {offset: 1, color: '#02d9e9'}
                            ]
                        )
                    }                    
                }
            },{
                data:[820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                name:'按期完成',
                smooth: true,
                barWidth :10,
                itemStyle: {                    
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#eb9bcf'},
                                {offset: 1, color: '#ffbe9f'}
                                
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