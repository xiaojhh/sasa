define(
	(function($){
		//console.log($);
		class TopLoad{
			constructor(){
				
			}
			init(ele){
				this.ele = ele;
				this.ele.load("public/top.html",function(response,status,xhr){
					//console.log(a,b,c);
				})
			}
		}
		return new TopLoad();
	})(jQuery)
	
)
