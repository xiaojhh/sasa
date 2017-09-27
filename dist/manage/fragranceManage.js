//商品列表的处理

define(["../model/login/login_load","../model/fragrence/all_load","../model/fragrence/gray_box_down","../model/fragrence/goods_item",
		"../model/fragrence/loadJson","../model/fragrence/more_item"],
	function(topLoad,allLoad,grayBoxDown,goodsItem,loadJson,moreItem){
	 topLoad.init($("#top_bar"));
	 //头部加载
	 allLoad.init();
	 //搜索加载 导航加载 右边购物加载
	grayBoxDown.init();
	//灰色款的点击下拉效果
	
	goodsItem.init();
	//香水列表的  张开效果
	loadJson.init();
	//商品列表动态加载
	moreItem.init();
})