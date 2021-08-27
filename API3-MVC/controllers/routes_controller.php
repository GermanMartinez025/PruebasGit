<?php 
	class Routes{
		public function start() {
			include('views/index.php');
		}
		public function rutas() {
			
			if(isset($_GET['routes'])) {
				$routes=$_GET['routes'];
				// echo $routes;
			} else {
				$routes='login';
			}

			$return=Routes_Model::RoutesModel($routes);
			include $return;
		}
	}
?>