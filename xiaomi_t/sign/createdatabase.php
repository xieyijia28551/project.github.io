<?php
    header('content-type:text/html;charset=utf8');
//创建连接
$servername = "127.0.0.1";
$username = "root";
$password = "root";

//创建连接
$conn = mysqli_connect($servername,$username,$password);
if(mysqli_connect_error()){
	die('连接失败');
}

//创建数据库
$sql = "CREATE DATABASE shop";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据库创建成功";
}else{
	echo "数据库创建失败";
}
$conn1 = mysqli_connect($servername,$username,$password,'shop');
$sql1 = "CREATE TABLE `user` (
   `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '' COMMENT '账户',
  `password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  `othername` varchar(255) NOT NULL DEFAULT '' COMMENT '昵称',
  `tel` varchar(255) NOT NULL DEFAULT '' COMMENT '联系电话',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '邮箱地址',
  PRIMARY KEY (`Id`)
)";
$result1 = mysqli_query($conn1,$sql1);
if($result1){
	echo "user数据表创建成功";
}else{
	echo "数据表创建失败";
}
$sql2="CREATE TABLE `cart` (
    `product_id` varchar(300) NOT NULL,
    `product_name` varchar(300) NOT NULL,
    `product_img` varchar(255) NOT NULL,
    `product_price` varchar(30) NOT NULL,
    `product_num` varchar(30) NOT NULL DEFAULT '1',
    `submission_data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`product_id`)
  )";
$result2 = mysqli_query($conn1,$sql2);
if($result2){
	echo "cart数据表创建成功";
}else{
	echo "数据表创建失败";
}
?>
