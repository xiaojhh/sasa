define(
	(function($){
		class loadJson{
			constructor(){
				
			}
			init(){
				//console.log(1);
				var _this = this;
				$.ajax({
					url:"../../public/fragrence.json",
					dataType:"json"
				}).then(function(res){
					//console.log(res);
					_this.res = res;
					_this.show();
					_this.move();
					_this.countDown($(".item_time"),9);
					_this.goodsBuy();
					_this.goodsAll();
					_this.goodsNumShow();
				},function(){
					console.warn("fail");
				})
			}
			goodsNumShow(){
				var num = $("#shopcar_num");
				
				if($.cookie("goods")){
					var cookie = $.cookie("goods");
					var cookiearr = JSON.parse(cookie);
					var all = 0 ;
					//console.log(cookiearr);
					for(var i = 0 ; i < cookiearr.length ; i++){
						all += Number(cookiearr[i].num);
					}
					//console.log(all);
					num.text(all);
				}else{
					num.text(0);
				}
				
			}
			
			show(){
				//var html ="";
				//console.log(this.res[0].img1);
				//console.log($(".all_list li").length);
				for(var i = 0 ; i <$(".all_list li").length; i++){
					var html =`
							<div class="goods_item">
											<div class="item_t">
												<img  src="${this.res[i%4].img1}" alt="" />										
											</div>
											<div class="item_r">
												<dl>
													<dd class="item_r_act"><img src="http://cn02.alicdn.sasa.com/public/images/9f/a6/51/89aeef006134004d70d0ec24103f812ee4f5ee46.jpg?1489385923#h" alt="" /></dd>
													<dd><img src="http://cn02.alicdn.sasa.com/public/images/c1/53/5b/9a4d42a7dfbcea4c1160d201cd959f396cb9f021.jpg?1489385923#h" alt="" /></dd>
													<dd><img src="http://cn02.alicdn.sasa.com/public/images/c5/c1/26/0694d47c4c5be33ef63a102c0191ab59b3c1d21a.jpg?1489385924#h" alt="" /></dd>
												</dl>
											</div>
											<div class="item_m clearfix">
												<span>￥123.0</span>
												<span>￥510.0</span>
												<span>2.6折</span>
											</div>
											<div class="item_b">
												<p><a href="">Calvin Klein</a></p>
												<p><a href="">ONE  卡莱优淡香水</a></p>
												<p>100毫升</p>
												<p>已售0件</p>
												<span class="item_buy">立即抢购</span>
											</div>
											<div class="item_time">剩余<span>00</span>天<span>00</span>小时<span>00</span>秒</div>
										</div>	
							
							`;
							
					$(".all_list li").eq(i).append(html);
				}
//				
			}
			move(){
				this.prDiv = $(".goods_item");
				this.meDiv = $(".item_r");
				this.mpDiv = $(".item_m");
				this.mbDiv = $(".item_b");
				var _this = this;
				this.prDiv.mouseover(function(){
					//console.log($(this).parent());
					//console.log($(this).find(_this.meDiv));
					//console.log($(this).parent().find(".item_t"),$(this).find(".item_r"));
					$(this).parent().css({
						zIndex:50
					})
					$(this).parent().find(".item_t").css({
						zIndex:40
					})
					$(this).find(".item_r").css({
						zIndex:30
					})
					$(this).find(_this.meDiv).stop().animate({
						right:-85
					},500)
					$(this).find(_this.mpDiv).stop().animate({
						width:308
					},500)
					//253
					$(this).find(_this.mbDiv).stop().animate({
						width:308
					},500)
					$(this).find($(".item_li")).stop().animate({
						width:308
					},500)
					$(this).find($(".item_buy")).stop().animate({
						opacity:1
					})
				})
				this.prDiv.mouseout(function(){
					//console.log(1);
					$(this).find(_this.meDiv).stop().animate({
						right:0
					},500)
					$(this).find(_this.mpDiv).stop().animate({
						width:223
					},500)
					//253
					$(this).find(_this.mbDiv).stop().animate({
						width:223
					},500)
					$(this).find($(".item_li")).stop().animate({
						width:223
					},500)
					$(this).find($(".item_buy")).stop().animate({
						opacity:0
					})
					$(this).parent().css({
						zIndex:25
					})
					$(this).parent().find(".item_t").css({
						zIndex:20
					})
					$(this).find(".item_r").css({
						zIndex:15
					})
					
				})
				this.shows();
			}
			shows(){
				
				//var oImg = $(".item_t");
				$(".item_r dl dd").mouseover(function(){
				//console.log(this);
				var oImg=$(this).parents(".goods_item").find(".item_t").find("img");
					$(this).addClass("item_r_act")
					.siblings().removeClass();
					//console.log($(this).find("img").attr("src"));
					oImg.attr("src",$(this).find("img").attr("src"));
					
				})
			
			}
			countDown(ele,time){
				this.ele=ele;
				this.time = time;
				this.target = new Date();
				this.target.setDate(this.target.getDate()+1);
				this.target.setHours(this.time);
				this.target.setMinutes(0);
				this.target.setSeconds(0);
				this.showTime();
			}
			showTime(){
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
			goodsBuy(){
				var _this  = this;
				this.cook={
							
						}
				var list=$(".item_buy");
				for(var i = 0 ; i <list.length ; i ++){
					list.eq(i).attr("data_id",i%4);
				}
				list.click(function(){
					
					
					var buyNum = 0;
					
					//console.log($(this).attr("data_id"));
					var  id=$(this).attr("data_id");
					//console.log(id);
					if($.cookie("goods")){
						var cookie = $.cookie("goods");
						//console.log(cookie);
						var cookieArr =JSON.parse(cookie);
						//console.log(cookieArr);
						var flag =true; //默认可以加入
						for(var i = 0 ; i < cookieArr.length ; i++){
							if (id == cookieArr[i].id){
								flag = false;//表示有相同的
								cookieArr[i].num++;
							}
							buyNum += Number(cookieArr[i].num);
						}
						if(flag){
							var add ={
								"id":id,
								"num":1
							}
							cookieArr.push(add);
						}
						//console.log(cookieArr);
						$.cookie("goods",JSON.stringify(cookieArr));
						_this.goodsNumShow();
					}else{
						buyNum +=1;
						$.cookie("goods",'[{"id":'+id+',"num":1}]');
						_this.goodsNumShow();
						//
						//'[{"id":'+oId+',"num":1}]'
					}
				})
			}
			goodsAll(){
				var _this=this;
				$(".shopcar_he").click(function(){
					//console.log(1);
				var	a= $(".divShowBuy");
					//console.log(a.css("display"));
					//a显示元素
					if(a.css("display")=="none"){
						//显示
						a.css({
							display:"block"
						})
						_this.goodsShow();
						_this.clearBuy();
					}else{
						//消失
						a.css({
							display:"none"
						})
						
						$(".divShowBuy").children().remove();
					}
					
				})
			}
			clearBuy(){
				var _this = this;
				$(".clearBuy").click(function(){
					$.cookie("goods",null);
					_this.goodsShow();
					_this.goodsNumShow();
				})
			}
			goodsShow(){
				var pare = $(".divShowBuy");
				var _this = this;
				if($.cookie("goods")){
					var cookie = $.cookie("goods");
					var cookieArr = JSON.parse(cookie);
					var html = "";
					//console.log(_this.res[cookieArr[0].id]);
					//console.log(cookieArr);
					for(var i = 0 ; i < cookieArr.length; i++){
						html +=`
								<div class ="r_buy_item">
									<div class="buy_l">
										<img src="${_this.res[cookieArr[i].id].img1}" alt="" />
									</div>
									<div class="buy_r">
										<p><span>价格</span><span>${_this.res[cookieArr[i].id].price1}</span>
											<span>数量</span><span>${cookieArr[i].num}</span>
										</p>
									</div>
								</div>
						
								`;
					}
					pare.append(html);
				}else{
					pare.text("你的购物车什么都没有!!!");
				}
			}
			
		}
		return new loadJson();
	})(jQuery)
)
