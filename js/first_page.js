

//轮播图
var index = 0;
    var timer = null;
    var $ulist = $("section ul li");
    var $olist = $("section ol li");
    timer = setInterval( autoPlay , 3000);
    function autoPlay(){
    	index++;
    	if( index == $ulist.size() ){
    		index = 0;
    	}
    	$olist.eq(index).addClass("current").siblings().removeClass("current");
    	$ulist.eq(index).fadeIn( 3000 ).siblings().fadeOut( 1000 );
    }
    //鼠标移入清除定时器
    $("section ol> li").mouseover(function(){
		clearInterval(timer);
		$(this).addClass("current").siblings().removeClass("current");
		index=$(this).index();
		$("section ul> li").eq(index).fadeIn(2000).siblings().fadeOut(500);
	})
	$("section ol>li").mouseout(function(){
		 timer = setInterval( autoPlay , 3000 );
	})
	
	//二级菜单
	$(".follow").mouseenter(function(){
		$("#follow1").show();
		
		$(".follow1 span").mouseenter(function(){
			$(this).css("color","#F52E95");
		});
		$(".follow1 span").mouseleave(function(){
			$(this).css("color","black");
		});
	})
	$(".follow1").mouseleave(function(){
		$("#follow1").hide();
	})
	
//获取二级菜单
var deff = $.ajax({
	type:"get",
	url:"json/lond.json?zz=" + new Date().getTime(),
	async:true
});
deff.done(function(json){
	var strpro1 = "";
	var strpro2= "";
	var _div1=document.getElementById("hot-city");
//	console.log(_div1);
	var _div2=document.getElementById("other-city");
//	console.log(_div2);
	for(var i in json){
		strpro1 += `<span class="list-other">${json[i]["province"]}</span>`;
		strpro2 += `<span class="list-other">${json[i]["city"]}</span>`;
			
	}
//	_div1.append("strpro1");
	_div1.innerHTML = strpro1;
	
//	_div2.append("strpro2");
	_div2.innerHTML = strpro2;

});

