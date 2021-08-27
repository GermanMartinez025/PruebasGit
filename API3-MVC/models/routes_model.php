<?php
	class Routes_Model {
		public static function RoutesModel($routes) {
			if($routes === "modPersonaje" || $routes === "verPersonaje") {
				$page = "views/modulos/".$routes.".php";
			} else if($routes == "index") {
				$page = "views/modulos/verPersonaje.php";
			}else{
				$page = "views/modulos/verPersonaje.php";
			}
			return $page;		
		}
	}
 ?>