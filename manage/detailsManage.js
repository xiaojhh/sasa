//详情列表业务处理
//console.log($);
define(["../model/login/login_load","../model/fragrence/all_load","../model/fragrence/loadJson","../model/details/magnify","../model/details/list_move",
		"../model/details/suspendBox","../model/count_down","../model/details/numAddDel"],
	function(topLoad,allLoad,loadJson,magnify,listMove,suspendBox,countDown,numAddDel){
		topLoad.init($("#top_bar"));
		
		 allLoad.init();
		 
		loadJson.init();
		//加载数据
		//console.log($);
		magnify.init();
		//放大镜
		listMove.init();
		//列表图片移动显示
		suspendBox.init();
		//悬浮框
		countDown.init($(".item_time1"),9);
		//倒计时插件
		numAddDel.init();
	}
)