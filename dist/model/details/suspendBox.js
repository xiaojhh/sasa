define(
	(function($){
		class SuspendBox{
			constructor(){
				
			}
			init(){
				this.ele = $(".pb_nav");
				var _this =this;
				//console.log($);
				$(window).scroll(function(){
					//scroll可以用于所有可以滚动元素
					//console.log($(window).scrollTop())
					if($(window).scrollTop()>=930){
						_this.ele.addClass("pb_nav_move");
						_this.ele.find("a").eq(0).addClass("pb_nav_act")
							.siblings().removeClass("pb_nav_act");
						if($(window).scrollTop()>=1300){
							//console.log(_this.ele.find("a"));
							_this.ele.find("a").eq(1).addClass("pb_nav_act")
							.siblings().removeClass("pb_nav_act");
						}
						if($(window).scrollTop()>=1800){
							_this.ele.find("a").eq(2).addClass("pb_nav_act")
							.siblings().removeClass("pb_nav_act");
						}
					}else{
						_this.ele.removeClass("pb_nav_move");
					}
					
				})
			}
		}
		return new SuspendBox();
	})(jQuery)
	
)
