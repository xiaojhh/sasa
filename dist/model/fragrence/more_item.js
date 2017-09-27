define(
	(function($){
		class MoreItem{
			constructor(){
				
			}
			init(){
				this.moreClass = $(".gallery_r");
				//console.log(this.moreClass);
				this.showMore(this.moreClass);
				$(".gallery_p").click(function(){
					var b = $(".gallery_more_dl ");
					if(b.css("display")=="none"){
						b.css({
							display:"block"
						})
					}else{
						b.css({
							display:"none"
						})
					}
				})
			}
			showMore(ele){
				
				ele.click(function(){
					var a = $(this).parent()
							.find(".gallery_filter_dd")
							.find(".gallery_filter_span");
					console.log(a.css("display"));
					if(a.css("display")=="none"){
						a.css({
							display:"block"
						})
					}else{
						a.css({
							display:"none"
						})
					}
				})
				
			}
			
		}
		return new MoreItem();
	})(jQuery)
)