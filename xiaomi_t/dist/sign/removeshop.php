<?php
     include "./base.php";
     $msg=$_GET['shopid'];
     $base=mysqli_connect('127.0.0.1','root','root','shop');
     $sql=mysqli_query($base,"DELETE FROM {$_COOKIE["username"]} WHERE `product_id`='$msg'");
     if($sql){
        echo json_encode(array("code"=>1));
    }else{
        echo json_encode(array("code"=>0));
    }
?>