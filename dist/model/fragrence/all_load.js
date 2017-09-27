define(
	(function($){
		class AllLoad{
			constructor(){
				
			}
			init(){
				var _this = this;
				$(".header_main").load("../../public/headRight.html .header_main",
					function(a,b,c){
					}
				);
				$(".header_bottom").load("../../public/headRight.html .header_bottom",
					function(a,b,c){
					
						$(".banner_menu").css({
								display:"none"
						})
						$(".header_classify").mouseover(function(){
							//console.log(2);
							$(".banner_menu").css({
								display:"block"
							})
						})
						$(".header_classify").mouseout(function(){
							$(".banner_menu").css({
								display:"none"
							})
						})
						$(".banner_menu").mouseover(function(){
							//console.log(2);
							$(".banner_menu").css({
								display:"block"
							})
						})
						$(".banner_menu").mouseout(function(){
							$(".banner_menu").css({
								display:"none"
							})
						})
						
						
							
						
									
					}
				);
				$(".shopcar").load("../../public/headRight.html .shopcar",
					function(a,b,c){
						_this.rightMove($("#shopcar_top"),$("#shopcar_top_me"));
					}
				);
				$(".promise").load("../../public/headRight.html .promise",function(a,b,c){
					//console.log(a,b,c);
				});
				$(".helper").load("../../public/headRight.html .helper");
				$(".footer").load("../../public/headRight.html .footer");
				
				
				
				this.show();
				
			}
			show(){
					//console.log(1);
					//console.log($(".header_classify"));
					$(".header_classify").mouseover(function(){
						console.log(2);
						$(".banner_menu").css({
							display:"block"
						})
					})
					$(".header_classify").mouseout(function(){
						$(".banner_menu").css({
							display:"none"
						})
					})
			}
			
			rightMove(wo,move){
				//console.log(1);
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
		return new AllLoad();
	})(jQuery)
	
)
