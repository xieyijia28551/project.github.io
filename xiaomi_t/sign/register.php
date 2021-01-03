<?php
    include "./base.php";
    $nc=$_GET['nc'];
    $user=$_GET['user'];
    $psw=$_GET['password'];
    $tel=$_GET['tel'];
    $address=$_GET['address'];


    // 1 连接数据库查询信息，根据数据库返回的信息执行相关的一系列操作
    $conn = mysqli_connect('127.0.0.1','root','root','shop');
    echo "数据库连接成功";

    // 2 执行sql语句
    $sql=mysqli_query($conn,"SELECT * FROM `user` WHERE `username`='$user'");

    // 3 解析查询结果
    $data=mysqli_fetch_all($sql); 
    if($data){
      //echo "查找成功";
        // echo "location.href='$(./signin.html)'";无效
        // header('location:./signin.html');
        echo "此账户已被注册,请重新输入";
        header('refresh:3;../regsiter.html');

    }else{
        echo "注册成功,正在跳转登录界面.....";
        $sql=mysqli_query($conn,"INSERT INTO `user` VALUES (null,'$user','$psw','$nc','$tel','$address')");
        // sleep(3);
        header('refresh:3;../sign.html');
    }

    // 4 断开连接
    mysqli_close($conn);
    echo "数据库断开连接";

    
    // echo "用户名是：".$user."密码是：".$psw;
?>