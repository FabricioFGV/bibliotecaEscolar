<?php
class Student{

	//Conexion a la tabla en la base de datos
	private $conn;
	private $table_name = "alumno";

	//Propiedades del objeto
	public $idClassmate;
	public $name;
	public $rank;
	public $group;
	public $idProgramE;

	public function __construct($db){
		$this->conn = $db;
	}

	function read(){

		$query = "SELECT u.idAlumno, u.nombre, u.Grado, u.Grupo, u.idProgramaE FROM ".$this->table_name." u ORDER BY idAlumno DESC";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;

	}

	function create(){

		$query = "INSERT INTO ".$this->table_name." SET idAlumno=:idClassmate, nombre=:name, Grado=:rank, Grupo=:group, idProgramaE=:idProgramE";

		$stmt = $this->conn->prepare($query);

		$this->idClassmate=htmlspecialchars(strip_tags($this->idClassmate));
		$this->name=htmlspecialchars(strip_tags($this->name));
		$this->rank=htmlspecialchars(strip_tags($this->rank));
		$this->group=htmlspecialchars(strip_tags($this->group));
		$this->idProgramE=htmlspecialchars(strip_tags($this->idProgramE));

		$stmt->bindParam(":idClassmate", $this->idClassmate);
		$stmt->bindParam(":name", $this->name);
		$stmt->bindParam(":rank", $this->rank);
		$stmt->bindParam(":group", $this->group);
		$stmt->bindParam(":idProgramE", $this->idProgramE);


		//Ejecutar query
		if($stmt->execute()){
			return true;
		}

		return false;

	}

	function readOne(){

		$query = "SELECT u.idAlumno, u.nombre, u.Grado, u.Grupo, u.idProgramaE FROM ".$this->table_name." u WHERE u.idAlumno = ? LIMIT 0,1";

		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(1, $this->idClassmate);

		$stmt->execute();

		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		$this->idClassmate = $row["idAlumno"];
		$this->name = $row["nombre"];
		$this->rank = $row["Grado"];
		$this->group = $row["Grupo"];
		$this->idProgramE = $row["idProgramaE"];

	}

	function update(){

		$query = "UPDATE ".$this->table_name." SET nombre=:name, Grado=:rank, Grupo=:group, idProgramaE=:idProgramE "." WHERE idAlumno=:idClassmate";

		$stmt = $this->conn->prepare($query);
		
		$this->name=htmlspecialchars(strip_tags($this->name));
		$this->rank=htmlspecialchars(strip_tags($this->rank));
		$this->group=htmlspecialchars(strip_tags($this->group));
		$this->idProgramE=htmlspecialchars(strip_tags($this->idProgramE));
		$this->idClassmate=htmlspecialchars(strip_tags($this->idClassmate));


		$stmt->bindParam(":name", $this->name);
		$stmt->bindParam(":rank", $this->rank);
		$stmt->bindParam(":group", $this->group);
		$stmt->bindParam(":idProgramE", $this->idProgramE);
		$stmt->bindParam(":idClassmate", $this->idClassmate);

		if($stmt->execute()){
        	return true;
    	}
    		return false;

	}
}
?>