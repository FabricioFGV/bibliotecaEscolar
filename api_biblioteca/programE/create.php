<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/ProgramE.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// prepare ProgramE object
$programE = new ProgramE($db);
  
// get id of ProgramE to be edited
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->EducationProgram)
    
){
 
    // set ProgramE property values
    $ProgramE->EducationProgram = $data->EducationProgram;
    
    // create the ProgramE
    if($ProgramE->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the ProgramE
        echo json_encode(array("message" => "El programa se ha registrado. "));
    }
 
    // if unable to create the ProgramE, tell the ProgramE
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the ProgramE
        echo json_encode(array("message" => "Error al registrar el alumno."));
    }
}
 
// tell the ProgramE data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the ProgramE
    echo json_encode(array("message" => "No se puede registrar al alumno los datos estan incompletos."));
}
?>