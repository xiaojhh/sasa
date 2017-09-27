define(
	(function($){
		class Magnify{
			constructor(){
				
			}
			init(){
				//console.log($);
				this.boxKeep = $(".box_keep");
				this.boxBlue = $(".box_blue");
				this.boxMove = $(".product_img_show");
				this.boxShowB = $(".product_img_big");
//				$.fn.a=function(){
//					alert(1);
//				}
//				$.fn.a();
				var _this = this;
				this.boxKeep.mouseover(function(){
					_this.boxShowB.css({
						display:"block"
					})
					_this.boxBlue.css({
						display:"block"
					})
				})
				this.boxKeep.mouseout(function(){
					_this.boxShowB.css({
						display:"none"
					})
					_this.boxBlue.css({
						display:"none"
					})
				})
				
				
				this.boxKeep.mousemove(function(e){
					//console.log(1);
					//console.log(this);
					//console.log($(this).offset().left());
					var w = _this.boxBlue.width();
					var h = _this.boxBlue.height();
					
					//console.log(w,h);
				//	console.log(e.offsetX)
					
					var nw = _this.margin(e.offsetY-h/2,"top");
					var nh = _this.margin(e.offsetX-w/2,"left");
					_this.boxBlue.css({
						top:nw,
						left:nh
					})
					//边界检查
					
					var smW = _this.boxKeep.width()-_this.boxBlue.width();
					var smH = _this.boxKeep.height()-_this.boxBlue.height();
					
					var pw = nw/smW;
					var ph = nh/smH;
					//console.log(pw,ph);
					//计算比例
					var bmW = _this.boxMove.width();
					var bmH = _this.boxMove.height();
					
					var bmWs = _this.boxShowB.width();
					var bmHs = _this.boxShowB.height();
					
					var left = parseInt((bmW-bmWs)*pw);
					var top =  parseInt((bmH-bmHs)*ph);
					//console.log(left,top);
					
					_this.boxMove.css({
						left:-top,
						top:-left
					})
				})
			}
			margin(move,flag){
				if(flag=="left"){
					if(move<0){
						return 0;	
					}
					if(move>this.boxKeep.width()-this.boxBlue.width()){
						return this.boxKeep.width()-this.boxBlue.width();
					}
					return move;
				}
				if(flag=="top"){
					if(move<0){
						return 0 ;
					}
					if(move>this.boxKeep.height()-this.boxBlue.height()){
						return this.boxKeep.height()-this.boxBlue.height();
					}
					return move ;
				}
				
			}
		}
		return new Magnify();
	})(jQuery)
)