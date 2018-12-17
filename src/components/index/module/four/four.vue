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
                        font:"#4995f5",
                        next:"#02d9e9"
                    }
                },
                four_two:{
                    four_One:'four_One ml14',
                    
                    color:{
                        font:"#febbaa",
                        next:"#f6a1da"                        
                    }
                },
                four_3:{
                    four_One:'four_One ml14',
                    color:{
                        font:"#31c3fc",
                        next:"#febbaa"
                    }
                },
                four_4:{
                    four_One:'four_One ml14',
                    color:{
                        font:"#bda9ee",
                        next:"#895dfa"
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