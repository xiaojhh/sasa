define(
	(function($){
		class CountDown{
			constructor(){
				
			}
			init(ele,time){
				this.ele=ele;
				this.time = time;
				this.target = new Date();
				this.target.setDate(this.target.getDate()+1);
				this.target.setHours(this.time);
				this.target.setMinutes(0);
				this.target.setSeconds(0);
				this.show();
			}
			show(){
				var _this = this;
				setInterval(function(){
					var st =_this.target.getTime()-new Date().getTime();
					var h  = parseInt(st/1000/60/60);
					var m = parseInt((st-h*60*60*1000)/1000/60);
					var s = parseInt((st-h*60*60*1000-m*60*1000)/1000);
					$.each(_this.ele,function(i,n){
						_this.ele.eq(i).children().eq(0).text(_this.change(h));
						_this.ele.eq(i).children().eq(1).text(_this.change(m));
						_this.ele.eq(i).children().eq(2).text(_this.change(s));
					})
				},1000)
			}
			change(n){
				if(n<10){
					n=0+""+n;
				}else{
					n=""+n;
				}
				return n;
			}
		}
		return new CountDown();
	})(jQuery)
)