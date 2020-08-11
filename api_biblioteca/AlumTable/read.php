<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// database connection will be here


// include database and object files
include_once '../config/database.php';
include_once '../objects/AlumTable.php';
 
// instantiate database and AlumTable object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$AlumTable = new AlumTable($db);
// read AlumTables will be here
// query AlumTables
$stmt = $AlumTable->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // AlumTables array
    $AlumTable_arr=array();
    $AlumTable_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $AlumTable_item=array(
            "enter" => $entrada,
            "Enrolmed"=>$Matricula,
            "name"=>$nombre,
            "rank"=>$Grado,
            "group"=>$Grupo,
            "EducationProgram" => $programaEducativo
        );
 
        array_push($AlumTable_arr["records"], $AlumTable_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show AlumTables data in json format
    echo json_encode($AlumTable_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the AlumTable no AlumTables found
    echo json_encode(
        array("message" => "No hay registros.")
    );
}
 
// no AlumTables found will be here

?>