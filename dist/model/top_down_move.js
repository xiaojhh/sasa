define(
	(function($){
		class TopMove{
			constructor(){
			}
			init(ele,ul){
				this.ele = ele;
				this.ul = ul;
				var _this =this;
				this.ele.mouseenter(function(){
					_this.ul.stop(true,false).animate({
						height:"160px"
					},200).css({
						display:"block"
					})
				});
				this.ele.mouseleave(function(){
					console.log(2);
					_this.ul.stop(true,false).animate({
						height:"0px"
					},200).queue(function(){
						$(this).css({
							display:"block"
						})
					});
				})
				
			}
		}
		return new TopMove();
	})(jQuery)
)