<?php
class AlumTable{

	//Conexion a la tabla en la base de datos
	private $conn;
	private $table_name = "registro";

	//propiedades del objeto
	public $idRegister; //idRegistro
	public $enter; //Entrada
	public $Enrolmed; //Matricula

	public $name;//nombre
	public $rank;//grado
	public $group;//grupo

	public $EducationProgram;//Programa Educativo

	// Contructor con bd
	public function __construct($db){
		$this->conn = $db;
	}

	// Leer

	function read(){

		$query = "select R.entrada, R.Matricula, A.nombre,A.Grado, A.Grupo, P.programaEducativo FROM ". $this->table_name." R INNER JOIN alumno A ON R.idMatricula = A.idAlumno INNER JOIN programae P ON A.idProgramaE = P.idProgramaE ORDER BY R.idRegistro DESC";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;

	}

	function readLast(){

		$query = "select R.entrada, R.Matricula, A.nombre,A.Grado, A.Grupo, P.programaEducativo FROM registro R INNER JOIN alumno A ON R.idMatricula = A.idAlumno INNER JOIN programae P ON A.idProgramaE = P.idProgramaE ORDER BY R.idRegistro DESC LIMIT 1";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;
	}
}
?>