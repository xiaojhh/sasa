define(
	(function($){
		class Time{
			constructor(){
				
			}
			init(ele,m,d,h){
				this.ele = ele;
				this.m = m;
				this.d = d;
				this.h = h;
				this.target = new Date();
				this.target.setMonth(this.m-1);
				this.target.setDate(this.d);
				this.target.setHours(this.h);
				this.show();
				
			}
			show(){
				var _this =this;
				setInterval(function(){
					var st = _this.target.getTime()-new Date().getTime();
					var d = parseInt(st/1000/60/60/24);
					var h = parseInt((st-d*1000*60*60*24)/1000/60/60);
					var m = parseInt((st-d*1000*60*60*24-h*1000*60*60)/1000/60)
					var s = parseInt((st-d*1000*60*60*24-h*1000*60*60-m*1000*60)/1000)    
					//console.log(s);
						_this.ele.children().eq(0).text(_this.change(d));
						_this.ele.children().eq(1).text(_this.change(h));
						_this.ele.children().eq(2).text(_this.change(m));
						_this.ele.children().eq(3).text(_this.change(s));
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
		return new Time();
	})(jQuery)
	
)