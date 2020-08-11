<?php
class Database{

	//Credenciales para la base de datos
	private $host = "127.0.0.1"; //Ip donde la base se conectara
	private $db_name = "registrobiblioteca"; //Nombre de la base
	private $username = "Administrador"; //Usuario que ingresa a la base
	private $password = 'qC6$pE$Dnj@U'; //Contraseña del usuario
	private $port = 3306; //Puerto donde se aloja la base
	public $conn; //Variante de la conecion a la base


	//Obtencion de la base de datos
	public function getConnection(){

		$this->conn = null;

		try {
			
			$this->conn = new PDO("mysql:host=" .$this->host .";port=".$this->port.";dbname=" .$this->db_name, $this->username, $this->password);
			$this->conn->exec("set names utf8");

		} catch (PDOException $exception) {
			
			echo "Connection error: " . $exception->getMessage();

		}

		return $this->conn;

	}
}
?>