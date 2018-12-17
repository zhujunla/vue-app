<template>
    <div class="RightInfo">        
           
           <scanCountary></scanCountary>  

           <div class="mt15">
              <fund></fund>      
           </div>
                    
    </div>
</template>
<script>
    import fund from "./fund";
    import scanCountary from "./scanCountary";
    export default {
    name:"four",     
    components:{
		fund:fund,
		scanCountary:scanCountary,
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
    @import "./less/RightInfo";
</style>