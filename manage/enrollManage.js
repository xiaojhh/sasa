//处理主持业务

define(["../model/login/login_load","../model/enroll/remember"],function(loginLoad,remember){
	loginLoad.init($("#top_bar"));
	remember.init($("#user_name"),$("#user_pass"),$("#user_pass1"));
})