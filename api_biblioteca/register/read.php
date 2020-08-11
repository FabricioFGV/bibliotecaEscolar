<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// database connection will be here


// include database and object files
include_once '../config/database.php';
include_once '../objects/Register.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$Register = new Register($db);
// read products will be here
// query products
$stmt = $Register->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $Register_arr=array();
    $Register_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $Register_item=array(
            "idRegister" => $idRegistro,
            "enter" => $entrada,
            "Enrolmend" => $Matricula,
            "idEnrolmed" => $idMatricula
        );
 
        array_push($Register_arr["records"], $Register_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($Register_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the Register no products found
    echo json_encode(
        array("message" => "No hay registros registrados.")
    );
}
 
// no products found will be here

?>