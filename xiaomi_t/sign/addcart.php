<?php
    include "./base.php";
    $id = $_REQUEST['id'];//商品id
    $name = $_REQUEST['name'];//商品name
    $img = $_REQUEST['img'];//商品img
    $price = $_REQUEST['price'];//商品price
    // $num = $_REQUEST['num'];//商品数量
    $base=mysqli_connect('127.0.0.1','root','root','shop');
    // echo "database connect sucessed!";
    $sql=mysqli_query($base,"SELECT * FROM `cart` WHERE `product_id`='$id'");
    $res=mysqli_fetch_all($sql);
    if($res){
        $row = mysqli_fetch_assoc($sql);//获取当前行数据,转成php数组
        $num = $row['product_num']+$num;
        $sql = "UPDATE `cart` SET `product_num`='$num' WHERE `product_id`='$id'";
    }else{
        $sql = "INSERT INTO `cart` (`product_id`,`product_img`,`product_name`,`product_price`) VALUES ('$id','$img','$name','$price')";
    }
    
    $result = mysqli_query($base,$sql);
    if($result){
        echo json_encode(array("code"=>1));
    }else{
        echo json_encode(array("code"=>0));
    }
   
?>