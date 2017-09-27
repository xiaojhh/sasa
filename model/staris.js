define(
	(function($){
		class Stairs{
			constructor(){
				
			}
			init(ele){
				this.ele = ele;
				this.top = $(".shopcar_fool");
				var _this = this;
				$(window).scroll(function(){
					//console.log($(window).scrollTop());
					var scl = $(window).scrollTop();
					if(scl>=400){
						_this.top.css({
							display:"block"
						})
						_this.top.click(function(){
							$(window).scrollTop(0);
						})
					}else{
						_this.top.css({
							display:"none"
						})
					}
					
					
					
					
					if(scl>=700){
						_this.ele.css({
							display:"block"
						})
						_this.ele.children().eq(0).addClass("active")
						.siblings().removeClass();
						if(scl>=1800){
							_this.ele.children().eq(1).addClass("active")
							.siblings().removeClass();
							if(scl>=5600){
								_this.ele.children().eq(2).addClass("active")
								.siblings().removeClass();
								if(scl>=6500){
									_this.ele.children().eq(3).addClass("active")
									.siblings().removeClass();
									if(scl>=7400){
										_this.ele.css({
											display:"none"
										})
									}
								}
							}
						}
					}else{
						_this.ele.css({
							display:"none"
						})
						
					}
				})
				
			}
		}
		return new Stairs();
	})(jQuery)
)

