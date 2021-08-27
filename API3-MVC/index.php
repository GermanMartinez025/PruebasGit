<?php 
	require_once("db/rickAndMorty_db.php");

	require_once("models/character_model.php");
	require_once("controllers/character_controller.php");

	require_once("models/routes_model.php");
	require_once("controllers/routes_controller.php");

	$routes=new Routes();
	$routes->start();

?>