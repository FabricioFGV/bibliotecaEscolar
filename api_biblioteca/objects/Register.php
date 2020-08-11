<?php
class Register{

	//Conexion a la tabla en la base de datos
	private $conn;
	private $table_name = "registro";

	//propiedades del objeto
	public $idRegister; //idRegistro
	public $enter; //Entrada
	public $Enrolmed; //Matricula
	public $idEnrolmed; //idMatricula

	// Contructor con bd
	public function __construct($db){
		$this->conn = $db;
	}

	// Leer

	function read(){

		$query = "SELECT c.idRegistro, c.entrada, c.Matricula, c.idMatricula FROM ". $this->table_name." c ORDER BY idRegistro DESC";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;

	}

	function readLast(){

		$query = "SELECT idRegistro, entrada, Matricula, idMatricula FROM ". $this->table_name."  getLastRecord ORDER BY idRegistro DESC LIMIT 1";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;
	}

	function create(){

		$query = "INSERT INTO ". $this->table_name." SET Matricula=:Enrolmed; SET SQL_SAFE_UPDATES = 0; update registro a JOIN alumno b on b.idAlumno = a.Matricula set a.idMatricula = b.idAlumno;";

		$stmt = $this->conn->prepare($query);

		$this->Enrolmed=htmlspecialchars(strip_tags($this->Enrolmed));

		$stmt->bindParam(":Enrolmed", $this->Enrolmed);

		//Ejecutar query
		if($stmt->execute()){
			return true;
		}

		return false;

	}

	function readOne(){

		$query = "SELECT u.idRegistro, u.entrada, u.Matricula FROM ".$this->table_name." u WHERE u.idRegistro = ? LIMIT 0,1";

		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(1, $this->idRegister);

		$stmt->execute();

		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		$this->idRegister = $row["idRegistro"];
		$this->enter = $row["entrada"];
		$this->Enrolmed = $row["Matricula"];

	}
	function update(){
		
	}
}
?>