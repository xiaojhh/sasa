define(
	(function(){
		class NumAddDel{
			constructor(){
				
			}
			init(){
				//console.log($);
				this.al = $(".product_add_a1");
				this.te = $(".product_add_te");
				this.ar = $(".product_add_a2");
				var _this = this;
				this.al.click(function(){
					_this.change("l");
				})
				this.ar.click(function(){
					_this.change("r");
				})
				
				$(".product_buy_er").hover(function(){
					$(".product_buy_div").css({
						display:"block"
					})
				},function(){
					$(".product_buy_div").css({
						display:"none"
					})
				})
				
			}
			change(direction){
				//console.log(direction);
				var n = Number(this.te.val());
				//console.log(n);
				if(direction=="l"){					
					n--;
					if(n<=0){
						n=0;
					}
					//console.log(this.te.val());
					this.te.attr("value",n);
				}
				if(direction=="r"){
					n++;
					console.log(n);
					this.te.attr("value",n);
				}
			}
		}
		return new NumAddDel();
	})()
)
