<?php
include("conexion.php");
header('Content-Type: application/json');

$con = conect();

if ($con) {
    $news = array();
    $consulta = "SELECT title, dateUpload, linkNew from   newsv2 WHERE stateNew='Aceptada' order by dateUpload DESC  ;";

    $result = mysqli_query($con, $consulta);

    if ($result) {
        //vamos a gaurdar toda la index 
        while ($row = $result->fetch_assoc()) {

            $news[] = $row;
        }

        // Array para almacenar la información de cada archivo HTML
        $newsContent = [];

        // Recorrer el array $news
        foreach ($news as $new) {
            // Obtener el linkNew de cada noticia
            $link = $new['linkNew'];

            // Leer el contenido del archivo HTML
            $content = file_get_contents("../".$link);

            // Agregar el contenido al array $newsContent
            $newsContent[] = [
                'title' => $new['title'],
                'dateUpload' => $new['dateUpload'],
                'content' => $content
            ];
        }

        // Devolver el array con la información de los archivos HTML
        echo json_encode(['success' => true, 'data' => $newsContent ], JSON_PRETTY_PRINT);

   
    } else {


        echo json_encode(['success' => true, 'message' => ' No existen datos']);
    }
    $con->close();
    // Devuelve los datos como JSON



} else {
    echo json_encode(['success' => true, 'message' => ' No se pudo conectar con la base de datos']);
}
// es l arespuesta que da el servidor
