define(
	(function($){
		class loginLoad{
			constructor(){
				
			}
			init(ele){
				ele.load("../../public/top.html",function(respone,status,xhr){
					//console.log(respone,status,xhr);
				})
			}
		}
		return new loginLoad();
	})(jQuery)
	
)
