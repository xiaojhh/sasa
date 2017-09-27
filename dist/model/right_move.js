define(
	(function($){
		class rightMove{
			constructor(){
				
			}
			init(){
				//console.log($);
				//console.log(1);
				//console.log(this.meA,this.meDiv);
				this.meA = $("#shopcar_top");
				this.meDiv = $("#shopcar_top_me");
				var _this = this;
				this.show(this.meA,this.meDiv);
				
			}
			show(wo,move){
				wo.mouseenter(function(){
					//console.log(1);
					move.stop().animate({
						opacity:1,
						left:-95
					})
				})
				wo.mouseleave(function(){
					//console.log(1);
					move.stop().animate({
						opacity:0,
						left:-130
					})
				})
			}
		}
		return new rightMove();
	})(jQuery)
	
)
