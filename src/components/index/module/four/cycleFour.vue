<template>
    <div :class="four_One.four_One">
        <div class="clearfix one_top">
            <div class="fl img">
                <span class="ml10">{{four_One.name}}(亿)</span>
            </div>
            <div class="fr years">
                <span class="btn">2018</span>	
            </div>
        </div>
        <div class="mt10 clearfix one_But">
            <div class="fl but_liO" :style="{background: 'linear-gradient(0deg,'+four_One.color.font+','+four_One.color.next+')'}"></div>
            <div class="fl but_num">{{four_One.data.number}}</div>
            <div class="fr clearfix but_cycle">
                <div class="fl cycle_l">同比增长</div>
                <div class="fl ml10">
                    <i-circle 
                    trail-color="#ffffff"
                    :size="40"
                    :trail-width="4"
                    :stroke-width="4"
                    :percent="four_One.data.persent"
                    stroke-linecap="square"
                    :stroke-color="four_One.color.font">                  
                            <div class="cycle_persent">
                                {{four_One.data.persent}}%
                            </div>
                       
                    </i-circle>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    name:"cycleFour",
    props:['four_One'],    
    data () {
            return {
                // four_One:this.four_One,//图片路劲
                
            }
        },        
        mounted(){            
            console.info(this.four_One)
        },       
        methods: {           
            
                
        }
}
</script>
<style lang="less">
    
</style>