<?php

class ProgramE{

	private $conn;
	private $table_name = "programae";

	public $idProgramE;
	public $EducationProgram;

	public function __construct($db){
		$this->conn = $db;
	}

	function read(){

		$query = "SELECT u.idProgramaE, u.programaEducativo FROM ". $this->table_name." u ORDER BY idProgramaE ASC";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;

	}

	function create(){

		$query = "INSERT INTO ".$this->table_name." SET programaEducativo=:EducationProgram";

		$stmt = $this->conn->prepare($query);

		$this->EducationProgram=htmlspecialchars(strip_tags($this->EducationProgram));

		$stmt->bindParam(":EducationProgram", $this->EducationProgram);

		if ($stmt->execute()) {
			return true;
		}

		return false;

	}

	function readOne(){

		$query = "SELECT u.idProgramaE, u.programaEducativo FROM ".$this->table_name." u WHERE u.idProgramaE = ? LIMIT 0,1";

		// prepare query statement
    $stmt = $this->conn->prepare($query);
  
    // bind id of product to be updated
    $stmt->bindParam(1, $this->idProgramE);
  
    // execute query
    $stmt->execute();
  
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
  
    // set values to object properties
    $this->EducationProgram = $row['programaEducativo'];

	}

	function update(){

		$query = "UPDATE 
		".$this->table_name." 
		SET 
			programaEducativ = :EducationProgram 
		WHERE 
			idProgramaE = :idProgramE";

		// prepare query statement
		$stmt = $this->conn->prepare($query);

		// sanitize
		$this->EducationProgram=htmlspecialchars(strip_tags($this->EducationProgram));
		$this->idProgramE=htmlspecialchars(strip_tags($this->idProgramE));

		// bind new values
		$stmt->bindParam(':EducationProgram', $this->EducationProgram);
		$stmt->bindParam(":idProgramE", $this->idProgramE);

		if($stmt->execute()){
        	return true;
    	}
    		return false;
	}
}
?>