define(
	(function($){
		class goodsItem{
			constructor(){
				
			}
			init(){
				//console.log($);
				this.prDiv = $(".goods_item");
				this.meDiv = $(".item_r");
				this.mpDiv = $(".item_m");
				this.mbDiv = $(".item_b");
				var _this = this;
				this.prDiv.mouseover(function(){
					//console.log(1);
					_this.meDiv.stop().animate({
						right:-85
					},500)
					_this.mpDiv.stop().animate({
						width:308
					},500)
					//253
					_this.mbDiv.stop().animate({
						width:308
					},500)
					$(".item_li").stop().animate({
						width:308
					},500)
					$(".item_buy").stop().animate({
						opacity:1
					})
				})
				this.prDiv.mouseout(function(){
					//console.log(1);
					_this.meDiv.stop().animate({
						right:0
					},500)
					_this.mpDiv.stop().animate({
						width:223
					},500)
					//253
					_this.mbDiv.stop().animate({
						width:223
					},500)
					$(".item_li").stop().animate({
						width:223
					},500)
					$(".item_buy").stop().animate({
						opacity:0
					})
					
				})
				this.show();
			}
			show(){
				var oImg = $(".item_t");
				$(".item_r dl dd").mouseover(function(){
					//console.log(this);
					$(this).addClass("item_r_act")
					.siblings().removeClass();
					//console.log($(this).find("img").attr("src"));
					oImg.find("img").attr("src",$(this).find("img").attr("src"));
					
				})
			}
		}
		return new goodsItem();
	})(jQuery)
)
