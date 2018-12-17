<template>
    <div class="mapAndBar">
        <div class="mapAndBar_flex">
           <mapPlant></mapPlant>
        </div>
        <div class="mapAndBar_flex ml14">
           <coreKPI></coreKPI>
        </div>
    </div>
</template>
<script>
    import mapPlant from "./map";
    import coreKPI from "./coreKPI";
    export default {
    name:"four",     
    components:{
		mapPlant:mapPlant,
		coreKPI:coreKPI,
	}, 
    data () {
            return {
            }
        },        
        mounted(){            
        },       
        methods: {           
            
                
        }
}
</script>
<style lang="less">
    @import "./less/mapAndBar";
</style>