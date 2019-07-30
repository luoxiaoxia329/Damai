//根据id获取页面元素
function $id(id){
	return document.getElementById(id);
}
//根据标签名获取元素
function $tn(tn){
	return document.getElementsByTagName(tn);
}

//根据标类名获取元素
function $cn(cn){
	return document.getElementsByClassName(cn);
}

//获取任意区间的整数值
function rand(min,max){ //[min,max]
	return Math.round( Math.random()*(max-min) + min );
}

function rand2(min,max){ //[min,max]
	return Math.floor( Math.random()*(max-min+1) + min );
}

//获取随机的颜色值
function getColor2(){
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += rand(0,15).toString(16);
	}
	return color;
}
function getColor(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//获取时间格式 年月日 时分秒
function dateToString(now){
	//定义一个时间对象 
	var now = new Date();
	//获取年月日
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var d = now.getDate();
	//获取时分秒
	var h = now.getHours();
	var m = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	 
	return year+"-"+month+"-"+d + " "+ h + ":" + m + ":" +s;
}
//判断参数是否小于10  小于10 前面拼接0
function toTwo( val ){
	return val < 10 ? "0"+val : val;
}
//定义一个函数 功能是获取验证码  字母和数字组成
function yzm(){
	var str = "";
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand(48,122);
		if( code >= 58 && code <= 64 || code >= 91 && code <= 96 ){
			i--;
		}else{
			//转成对应的字符
			str += String.fromCharCode( code );
		}
	}
	return str;
}
//动态添加元素
function creat(ele){
	return document.createElement(ele);
}

//碰撞函数
function pz(d1,d2){
	var T1 = d1.offsetTop;
	var B1 = d1.offsetHeight + d1.offsetTop;
	var L1 = d1.offsetLeft;
	var R1 = d1.offsetWidth + d1.offsetLeft;
	var T2 = d2.offsetTop;
	var B2 = d2.offsetHeight + d2.offsetTop;
	var L2 = d2.offsetLeft;
	var R2 = d2.offsetWidth + d2.offsetLeft;
	//碰不上返回false
	if( R2<L1 || R1< L2 || B2<T1 || B1<T2 ){
		return false;
	}else{
		return true;//碰上了 返回true
	}
}
//功能 添加一个元素到一个容器中
	function append(parent,child){
		return parent.appendChild( child );
	}  

//验证码
	function yzm2(){
		var arr=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var str="";
		 for(var i=0;i<6;i++){			
			str+=arr[Math.floor(Math.random()*arr.length)];
		 }
		return str;
	}
	
