<?php 
      include "./base.php";
      $base=mysqli_connect('127.0.0.1','root','root','shop');
      $sql=mysqli_query($base,"SELECT * FROM {$_COOKIE["username"]}");
      if(mysqli_num_rows($sql)>0){
          $arr=mysqli_fetch_all($sql,MYSQL_ASSOC);
          echo json_encode(array("code"=>1,"data"=>$arr));
      }else{
        echo json_encode(array("code"=>0));
      }


?>