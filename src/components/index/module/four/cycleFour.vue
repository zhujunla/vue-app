<template>
    <div :class="four_One.four_One">
        <div class="clearfix one_top">
            <div class="fl img">
                <span class="ml10">年总营收(亿)</span>
            </div>
            <div class="fr years">
                <span class="btn">2018</span>	
            </div>
        </div>
        <div class="mt10 clearfix one_But">
            <div class="fl but_liO" :style="{background: 'linear-gradient(0deg,'+four_One.color.font+','+four_One.color.next+')'}"></div>
            <div class="fl but_num">3456</div>
            <div class="fr clearfix but_cycle">
                <div class="fl cycle_l">同比增长</div>
                <div class="fl ml10">
                    <i-circle 
                    :size="40"
                    :trail-width="2"
                    :stroke-width="2"
                    :percent="80"
                    stroke-linecap="square"
                    :stroke-color="four_One.color.font">                  
                            <div class="cycle_persent">
                                80%
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