<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["message" => 'no hay inciooo',"link"=>"login.html"]);
   
    
    die();
}
else{
    echo json_encode(["message" => "Bienvenido, " . $_SESSION['user_email'],"link"=>"createNew.html"]);


}


?>
