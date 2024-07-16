<?php
include("conexion.php");

$con=conect();

if($con){
 
    $consulta="Select * from  users;";
    
  $result = mysqli_query($con,$consulta);

  if($result){
    while ($row = $result->fetch_assoc()) {
      
      
    
       echo "<h1>",$row['userName'],"</h1>",
       "<h1>",$row['email'],"<h1>";// despliega el username de la base de datos
    
        
    }

}
    else{

        echo null;
    }
    }
else{
    echo "sin encontrar";
}

// es l arespuesta que da el servidor


?>