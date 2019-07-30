<?php
header("content-type:text/html;charset=utf-8");
$a=$_POST["dname"];
$b=$_POST["dpwd"];

$con=mysql_connect("localhost","root","root");
mysql_select_db("db1909",$con);

mysql_query("set names utf-8");

$sql = "select * from user where name='$a'";
$res = mysql_query( $sql );

$arr = mysql_fetch_array( $res );

if($arr){
	if( $b== $arr["pwd"] ){
			echo "<script>alert('登录成功');</script>";
		}else{
			echo "<script>alert('密码错误');</script>";
		}
	
}else{
	echo "<script>alert('用户名不存在');</script>";
}
?>