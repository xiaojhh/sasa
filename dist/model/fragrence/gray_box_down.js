define(
	(function($){
		class grayBoxDown{
			constructor(){
				
			}
			init(){
				this.list = $(".gray_box");
				
				for(var i = 0 ; i < this.list.children().length;i++){
					this.list.children().eq(i).attr("dis",0);
				}
				
				this.list.children().click(function(){
					//console.log($(this).attr("dis"));
					if(Number($(this).attr("dis"))){
						//console.log(1);
						$(this).find(".gray_box_dowm").css({
							display:"none"
						});
						$(this).attr("dis",0);
					}else{
						//console.log(2);
						$(this).find(".gray_box_dowm").css({
							display:"block"
						});
						$(this).attr("dis",1);
					}
					
					
				});
			}
		}
		return new grayBoxDown();
	})(jQuery)
	
)
