<?php
	class character_controller{
		
		

		public function addPersonaje() {
			require_once("models/character_model.php");
			if(isset($_GET['character']) && isset($_POST['nombre']) && isset($_POST['estado']) 
			&& isset($_POST['especie']) && isset($_POST['genero'])){
				$personaje = new character_model();
				$personaje->addPersonaje();
				
			}
		}
		public function mostrarPropiedad(){
			
		}
	}

?>