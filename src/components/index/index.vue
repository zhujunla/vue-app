<template>
	<div>

    <div class="header">
			<div class="header_logo">
				<div class="logo_img">
					<span>山西省国资监管大数据平台</span>
					<div class="logo_time">
						<div class="fl time_sec">{{getTime}}</div>
						<div class="fl ml20 time_week">
							<p>{{getweek}}</p>
							<p>{{getMouth}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="body mt20">
			<div class="w11570 ">
				<div class="clearfix">
					<div class="fl budy_lL">
						<cycleFour></cycleFour>
						<mapAndBar></mapAndBar>						
						<windAndCom></windAndCom>						
					</div>
					<div class="fr body_rR">
						<RightInfo></RightInfo>
					</div>
				</div>
				<div class="mt14">
					<internetCompany></internetCompany>
				</div>
			</div>


		</div>
		</div>	
</template>

<script>

import cycleFour from "./module/four/four";
import moment from "moment";
import mapAndBar from "./module/mapAndBar/mapAndBar";
import RightInfo from "./module/company/RightInfo";
import windAndCom from "./module/windAndCom/windAndCom";
import internetCompany from "./module/internetCompany/internetCompany";
moment.locale('zh-cn');
export default {
    name:"index",
    components:{
		cycleFour:cycleFour,
		mapAndBar:mapAndBar,
		RightInfo:RightInfo,
		windAndCom:windAndCom,
		internetCompany:internetCompany,
	},
    data () {
		return {
			getTime:moment().format('hh:mm:ss'),
			getMouth:moment().format('YYYY.MM.DD'),
			getweek:moment().format('dddd'),

			
		}
	},        
	mounted(){            
		this.changeTime();
	},       
	methods: {            
		changeTime() {
			var _this = this;
			setInterval(function(){
				_this.getTime = moment().format('hh:mm:ss');
			},1000)
			
		}
			
	}
}
</script>

<style lang="less">
    @import "./css/index";
</style>
