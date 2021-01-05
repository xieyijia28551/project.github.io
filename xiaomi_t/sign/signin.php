<?php
    header('content-type:text/html;charset=utf8');
    $user=$_GET['user'];
    $psw=$_GET['password'];
    // 1 连接数据库 
    $conn=mysqli_connect('127.0.0.1','root','root','shop');

    // 2 执行sql语句
    $sql=mysqli_query($conn,"SELECT * FROM `user` WHERE `username`='$user' AND `password`='$psw'");
    
    // 3 数据解析
    $data=mysqli_fetch_all($sql);
    
    if($data){
        echo "用户登录成功,正在跳转商城页面.......";
        setcookie('username',$user,time()+3600,'/');
        header('refresh:3;../index.html');//refresh页面加载倒计时
    }else{
        echo "查无此人,页面正在自动跳转.......";
        header('refresh:3;../regsiter.html');//refresh页面加载倒计时
    }
    // 4 关闭连接
    mysqli_close($conn);
?>