<template>
    <div class="windAndCom">
        <div class="windAndCom_flex flex1">
           <wind></wind>
        </div>
        <div class="windAndCom_flex flex2 ml14">
           <company></company>
        </div>
    </div>
</template>
<script>
    import wind from "./wind";
    import company from "./company";
    export default {
    name:"four",     
    components:{
		wind:wind,
		company:company,
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
    @import "./less/windAndCom";
</style>