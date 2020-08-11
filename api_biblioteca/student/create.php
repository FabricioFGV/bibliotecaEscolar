<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate student object
include_once '../objects/student.php';
 
$database = new Database();
$db = $database->getConnection();
 
$student = new student($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->idClassmate) &&
    !empty($data->name) &&
    !empty($data->rank) &&
    !empty($data->group) &&
    !empty($data->idProgramE)
    
){

    // set student property values
    
    $student->idClassmate = $data->idClassmate;
    $student->name = $data->name;
    $student->rank = $data->rank;
    $student->group = $data->group;
    $student->idProgramE = $data->idProgramE;
    
    // create the student
    if($student->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the student
        echo json_encode(array("message" => "El usuario se ha registrado. "));
    }
 
    // if unable to create the student, tell the student
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the student
        echo json_encode(array("message" => "Error al registrar el usuario."));
    }
}
 
// tell the student data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the student
    echo json_encode(array("message" => "No se puede registrar al alumno los datos estan incompletos."));
}
?>