define(["../model/login/login_load","../model/fragrence/all_load","../model/fragrence/loadJson","../model/activity/time"],
	function(topLoad,allLoad,loadJson,time){
	topLoad.init($("#top_bar"));
		
		 allLoad.init();
		 
		loadJson.init();
		//加载数据
		time.init($(".time_box_m"),10,5,9);
		
})