<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate Register object
include_once '../objects/Register.php';
 
$database = new Database();
$db = $database->getConnection();
 
$Register = new Register($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->Enrolmed)
    
){
 
    // set Register property values
    $Register->Enrolmed = $data->Enrolmed;
    
    // create the Register
    if($Register->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the Register
        echo json_encode(array("message" => "El alumno se ha registrado. "));
    }
 
    // if unable to create the Register, tell the Register
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the Register
        echo json_encode(array("message" => "Error al registrar el alumno."));
    }
}
 
// tell the Register data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the Register
    echo json_encode(array("message" => "No se puede registrar al alumno los datos estan incompletos."));
}
?>