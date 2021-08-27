<?php
	class character_model{
		private $database;
		private $character;

		public function __construct(){
			$this->database=Conectar::conexion();
			$this->character=array();
		}
		public function addPersonaje(){
			$consulta=$this->database->prepare("CALL AddPersonaje(?, ?, ?, ?, ?, ?, ?, ?)");
			$consulta->bind_param('issssssi', $id, $nombre, $estado, $especie, $genero, $origen, $ubicaccion, $salida);
			$salida=0;
			if (isset($_GET['character']) && isset($_POST['nombre']) && isset($_POST['estado']) && isset($_POST['especie']) 
			&& isset($_POST['genero']) && isset($_POST['origen'])&& isset($_POST['ubicaccion'])) {
				$id=$_GET['character'];
				$nombre=$_POST['nombre'];
				$estado=$_POST['estado'];
				$especie=$_POST['especie'];
				$genero=$_POST['genero'];
				$origen=$_POST['origen'];
				$ubicaccion=$_POST['ubicaccion'];
			}
			$consulta->execute();

			
		}
		public function getPersonaje(){
			$consulta=("SELECT * FROM PERSONAJE");
			$consulta=$this->db->query($consulta);
			if($consulta->num_rows()>0){
				while($fila=$consulta->fetch_assoc()){
					$lstPersonajes[]=$fila;
				}
			}
			
			$json=json_encode($lstPersonajes);

			return $lstPersonajes;
		}
	}

?>