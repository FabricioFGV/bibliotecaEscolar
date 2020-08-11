<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// database connection will be here


// include database and object files
include_once '../config/database.php';
include_once '../objects/ProgramE.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$programE = new programE($db);
// read products will be here
// query products
$stmt = $programE->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $programE_arr=array();
    $programE_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $programE_item=array(
            "idProgramE" => $idProgramaE,
            "EducationProgram" => $programaEducativo
        );
 
        array_push($programE_arr["records"], $programE_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($programE_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the programE no products found
    echo json_encode(
        array("message" => "No hay Programas registrados.")
    );
}
 
// no products found will be here

?>