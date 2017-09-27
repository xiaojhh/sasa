//登录业务处理
//console.log(1);
define(["../model/login/login_load","../model/login/remember"],
	function(loginLoad,remember){
	loginLoad.init($("#top_bar"));
	//加载头部
	
	remember.init($("#user_name"),$("#user_pass"),$("#checkBox"));
	//记住功能 保存密码功能
	
	//返回没定义就是 define 没哟return；
})
