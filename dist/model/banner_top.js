define((function($){
	
	function isBanner(){
	}
	isBanner.prototype.init = function(ele,span){
		this.ele = ele;
		this.span = span;
		this.in = 0;
		var _this = this;
		span.children().mouseenter(function(){
			_this.in=$(this).index();
			_this.show(this);
		});
		$(".banner_img").mouseover(function(){
			clearInterval(_this.timer);
		}).mouseout(function(){
			_this.move();
		})
		this.span.mouseover(function(){
			clearInterval(_this.timer);
		})
	}
	isBanner.prototype.show = function(a){
		$(a)
			.siblings()
			.removeClass()
			.end()
			.addClass("active_banner_index");
			this.ele.children().eq(this.in).children().stop().animate({
				opacity:1
			}).end().siblings().children().stop().animate({
				opacity:0
			});
	}
	isBanner.prototype.move = function(){
		var _this = this;
		clearInterval(_this.timer);
		_this.timer = setInterval(function(){
			_this.show(_this.span.children().eq(_this.in));			
			_this.in++;
			if(_this.in == _this.span.children().length){
				_this.in=0;
			}
		},2000);
	}
	return new isBanner();
})(jQuery))
