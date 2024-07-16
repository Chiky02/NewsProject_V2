<?php
include("conexion.php");

$con=conect();

if($con){
    $news = array();
    $consulta="Select * from  news;";
    
  $result = mysqli_query($con,$consulta);

  if($result){
    while ($row = $result->fetch_assoc()) {
      
       $news[]=$row;
    }

}
    else{

        echo null;
    }
    $con->close();
    // Devuelve los datos como JSON
header('Content-Type: application/json');
echo json_encode($news);

    }
else{
    echo "sin encontrar";
}
// es l arespuesta que da el servidor
?>