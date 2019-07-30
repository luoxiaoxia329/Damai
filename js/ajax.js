var xhr = new XMLHttpRequest();
		xhr.open("post","ajaxPost.php");
		//设置发送请求头
		xhr.setRequestHeader( "content-type","application/x-www-form-urlencoded" );
		xhr.send("uname=jack&upwd=111");//向服务器发送数据
		xhr.onreadystatechange = function(){
			if( xhr.readyState==4 && xhr.status == 200 ){
				alert( xhr.responseText );
			}
		}