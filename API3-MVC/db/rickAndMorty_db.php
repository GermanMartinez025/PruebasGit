<?php
class Conectar{

		public static function conexion(){
			$conexion = new mysqli("localhost", "root", "","RickAndMorty_DB");
			$conexion->query("SET NAMES 'utf8'");
			if($conexion->connect_errno){
				die('Oh! parece ser que existe un error en la conexión con la base de datos');
			}else{
				return  $conexion;
			}
		}
	}
?>