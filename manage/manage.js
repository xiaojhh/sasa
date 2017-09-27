//业务处理
//console.dir(jQuery);
define(["model/top_down_move","model/banner_top","model/notice","model/staris",
		"model/count_down","model/top_load","model/right_move"],
	function(topDownMove,bannerTop,notice,staris,countDown,topLoad,rightMove){
	topDownMove.init($("#top_bar_member_me_a"),$(".top_bar_member_me"));
	//头部的订单下滑效果
	
	bannerTop.init($("#banner_img_list"),$("#banner_index_list"));
	//中间的轮播图效果
	notice.init($(".notice_list ul"));
	//小广告的转换
	staris.init($(".stairs"));
	//楼梯效果
	//console.log(countDown);
	countDown.init($(".item_time"),9);
	//倒计时，传入参数下一天9点
	topLoad.init($("#top_bar"));
	//加载头部
	rightMove.init();
})
