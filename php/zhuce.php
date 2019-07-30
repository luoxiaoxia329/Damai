<?php
header("content-type:text/html;charset=utf-8");
$a=$_POST["name"];
$b=$_POST["pwd"];
$con=mysql_connect("localhost","root","root");
mysql_select_db("db1909",$con);
mysql_query("set names utf-8");
$sql="insert into user(name,pwd)value('$a','$b')";
$rr=mysql_query($sql);
if($rr){
	echo "<script>alert('注册成功');location.herf='zhuce.html';</script>";
}else{
	echo "<script>alert('注册失败');</script>";
}
?>