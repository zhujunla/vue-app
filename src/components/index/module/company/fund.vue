<template>
  <div class="map">
    <div class="clearfix one_top">
      <div class="fl img clearfix">
        <span class="imgShow fl"></span>
        <span class="ml10 fl">行业及资产</span>
      </div>
    </div>
    <div class="mapShow">
      <div ref="work" class="mapShow_c"></div>
      <div ref="fund" class="mapShow_c"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "four",
  components: {},
  data() {
    return {
        color: ['#fdd36d','#ff4800', '#d33efb', '#31ddfb', '#7bd540','#dfe55f',  '#0071ff', '#bda29a','#6e7074', '#546570', '#c4ccd3'],

    };
  },
  mounted() {
      this.workF();
      this.fundF();
  },
  methods: {
    workF: function() {
        var _this = this;
      var myChart = echarts.init(this.$refs.work);
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:_this.color,
        // legend: {
        //   orient: "vertical",
        //   x: "left",
        //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        // },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,           
            label: {
              normal: {
                // show: false,
                // position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                //   fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    fundF: function() {
    var _this = this;
      var myChart = echarts.init(this.$refs.fund);
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:_this.color,
        // legend: {
        //   orient: "vertical",
        //   x: "left",
        //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        // },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                // show: false,
                // position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                //   fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
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