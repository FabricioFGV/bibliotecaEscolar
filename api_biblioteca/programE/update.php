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
$ProgramE = new ProgramE($db);
  
// get idProgramE of ProgramE to be edited
$data = json_decode(file_get_contents("php://input"));
  
// set idProgramE property of ProgramE to be edited
$ProgramE->idProgramE = $data->idProgramE;
  
// set ProgramE property values
$ProgramE->EducationProgram = $data->EducationProgram;
  
// update the ProgramE
if($ProgramE->update()){
  
    // set response code - 200 ok
    http_response_code(200);
  
    // tell the user
    echo json_encode(array("message" => "ProgramE was updated."));
}
  
// if unable to update the ProgramE, tell the user
else{
  
    // set response code - 503 service unavailable
    http_response_code(503);
  
    // tell the user
    echo json_encode(array("message" => "Unable to update ProgramE."));
}
?>