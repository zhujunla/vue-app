<template>
    <div class="internetCompany">
        <div class="internetCompany_flex">
           <internet></internet>
        </div>
        <div class="internetCompany_flex ml14">
           <company></company>
        </div>
    </div>
</template>
<script>
    import internet from "./internet";
    import company from "./company";
    export default {
    name:"four",     
    components:{
		internet:internet,
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
    @import "./less/internetCompany";
</style>