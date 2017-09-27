define(
	(function($){
		class ListMove{
			constructor(){
				
			}
			init(){
				//console.log($);
				this.sDiv = $(".product_img");
				this.bDiv = $(".product_img_show").find("img");
				this.ele = $(".product_show");
				//console.log(this.sDiv,this.bDiv);
				var _this = this;
				this.ele.children().mouseover(function(){
					//console.log($(this));
					$(this).css({
						border:"4px solid #f99"
					}).siblings().css({
						border:"1px solid #ddd"
					})
					//console.log($(this).find("img").attr("src"));
					var a= $(this).find("img").attr("src");
					_this.sDiv.css({
						background:"url("+a+") no-repeat",
						backgroundSize:"100% 100%"
					})
					//console.log(_this.bDiv.attr("src"));
					_this.bDiv.attr("src",a);
				})
				$(".list_l").click(function(){
					var m =$(".product_show").css("marginLeft");
					console.log(m);
					if(m=="0px"){
						
					}else{
						$(".product_show").stop().animate({
							marginLeft:0
						})
					}
				})
				$(".list_r").click(function(){
					var m =$(".product_show").css("marginLeft");
					console.log(m);
					if(m=="-100px"){
//						$(".list_r").css({
//							color:"#ddd"
//						})
					}else{
						$(".product_show").stop().animate({
							marginLeft:-100
						})
					}
				})
			}
		}
		return new ListMove();
	})(jQuery)
	
)
