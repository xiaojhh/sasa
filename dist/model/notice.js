define(
	(function($){
		class Notice{
			constructor(){
				
			}
			init(ele){
				this.ele = ele;
				this.flag = -24;
				this.move();
			}
			move(){
				clearInterval(this.timer);
				var _this  = this;
				this.timer = setInterval(function(){
					_this.ele.stop().animate({
						marginTop:_this.flag,
					},1000).queue(function(){
						_this.flag = _this.flag-24;
						if(_this.flag<=-164){
							_this.flag=-24;
							_this.ele.css({
								marginTop:0
							})
//							.queue(function(){
//								_this.ele.stop().animate({
//									marginTop:-24
//								})
//							})
						}
				})
				//	console.log(_this.flag);
					//console.log(_this.ele.css("marginTop"));
				},2000);
				
			}
		}
		return new Notice();
	})(jQuery)
)
