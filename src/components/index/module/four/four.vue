<template>
    <div class="lL_four">
        <cycleFour :four_One="four_One"></cycleFour>
        <cycleFour :four_One="four_two"></cycleFour>
        <cycleFour :four_One="four_3"></cycleFour>
        <cycleFour :four_One="four_4"></cycleFour>
    </div>
</template>
<script>
    import cycleFour from "./cycleFour";
    export default {
    name:"four",     
    components:{
		cycleFour:cycleFour,
	}, 
    data () {
            return {
                four_One:{
                    four_One:'four_One',
                    color:{
                        font:"red",
                        next:"yellow"
                    }
                },
                four_two:{
                    four_One:'four_One ml14',
                    color:{
                        font:"red",
                        next:"yellow"
                    }
                },
                four_3:{
                    four_One:'four_One ml14',
                    color:{
                        font:"red",
                        next:"bule"
                    }
                },
                four_4:{
                    four_One:'four_One ml14',
                    color:{
                        font:"red",
                        next:"yellow"
                    }
                }
                
            }
        },        
        mounted(){            
        },       
        methods: {           
            
                
        }
}
</script>
<style lang="less">
    
</style>