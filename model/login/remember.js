define(
	(function(){
		class Remember{
			constructor(){
				
			}
			init(uName,uPass,uCheck){
				this.uName = uName;
				this.uPass = uPass;
				this.uCheck = uCheck;
				this.num = [false,false];
				this.flag = true;
				var _this = this;
				$("#login_into a").click(function(){
					console.log(_this.num);
					_this.flag=true;
					for(var i = 0 ; i < _this.num.length;i++) {
						if(_this.num[i]==false){
							_this.flag=false;
							break;
						}
					}
					console.log(_this.flag);
					if(_this.flag){
						if(_this.uCheck.prop("checked")){
							//console.log(_this.uName.find("input").val(),_this.uPass.find("input").val());
							$.cookie("user",_this.uName.find("input").val(),{expires:30,path:"/"});
							$.cookie("pass",_this.uPass.find("input").val(),{expires:30,path:"/"});
							console.log("cookie");
						}
					}
					
				})
				this.show();
				this.audit();
			}
			show(){
				if($.cookie("user")){
					this.uName.find("input").val($.cookie("user"));
				}
				if($.cookie("pass")){
					this.uPass.find("input").val($.cookie("pass"));
				}
			}
			audit(){
				var _this = this;
				this.uName.find("input").focus(function(){
					var reg =/^\w+@[a-z0-9]+\.+[a-z]+$/i; //邮箱验证
					var reg1 =/^13[0-9]{9}$/; //手机验证
					if(reg.test(_this.uName.find("input").val())||reg1.test(_this.uName.find("input").val())){
						_this.num[0]=true;
					}else{
						_this.uName.find("p").css({
							display:"block"
						})
						setTimeout(function(){
							_this.uName.find("p").css({
								display:"none"
							})
						},2000)
						//延迟提示
						_this.num[0]=false;
					}
				})
				this.uPass.find("input").focus(function(){
					var reg = /^\S+$/;
					if(reg.test(_this.uPass.find("input").val())){
						_this.num[1]=true;
					}else{
						_this.uPass.find("p").css({
							display:"block"
						})
						setTimeout(function(){
							_this.uPass.find("p").css({
								display:"none"
							})
						},2000)
						//延迟提示
						_this.num[1]=false;
					}
				})
				
			}
		}
	 return	new Remember();
	})()
	//不能加分号
	
)