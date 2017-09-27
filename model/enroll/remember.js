define(
	(function(){
		class Remember{
			constructor(){
				
			}
			init(uName,uPass,uPass1){
				
				this.uName = uName;
				this.uPass = uPass;
				this.uPass1 = uPass1;
				this.showDiv = $("#showRes");
				this.num = [false,false,false];
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
						_this.ajaxIn();
					}
					
				})
			
				this.audit();
			}
			ajaxIn(){
				var _this = this;
				$.ajax({
					type:"post",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:"register",
						userID:_this.uName.find("input").val(),
						password:_this.uPass.find("input").val()
					},
					async:true,
					success:function(res){
						switch(res){
							case "0" : _this.value = "用户名已经注册";break;
							case "1" : _this.value = "恭喜您注册成功";break;
						}
						_this.showRes();
					},
					error:function(res){
						console.log(res);
					}
				});
			}
			showRes(){
				var _this = this;
				this.showDiv.css({
					top:$(window).height()/2-_this.showDiv.height()/2,
					left:$(window).width()/2-_this.showDiv.width()/2
					
				})
				this.showDiv.text(this.value);
				setTimeout(function(){
					_this.showDiv.css({
						display:"none"
					})
				},500)
			}
			audit(){
				var _this = this;
				console.log(this.uName,this.uPass);
				this.uName.find("input").focusout(function(){
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
				this.uPass.find("input").focusout(function(){
					var reg = /^[a-zA-Z0-9]{6,16}$/;
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
				this.uPass1.find("input").focusout(function(){
					if(_this.uPass1.find("input").val()==_this.uPass.find("input").val()&&_this.uPass1.find("input").val()!=""){
						_this.num[2]=true;
					}else{
						_this.uPass1.find("p").css({
							display:"block"
						})
						setTimeout(function(){
							_this.uPass1.find("p").css({
								display:"none"
							})
						},2000)
						//延迟提示
						_this.num[2]=false;
					}
				})
				
			}
		}
	 return	new Remember();
	})()
	//不能加分号
	
)