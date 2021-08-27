<!DOCTYPE html>
<html lang="es">
    <head>
        <!--Inicio de favicon-->
        <link rel="apple-touch-icon" sizes="57x57" href="views/img/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="views/img/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="views/img/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="views/img/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="views/img/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="views/img/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="views/img/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="views/img/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="views/img/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="views/img/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="views/img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="views/img/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="views/img/favicon/favicon-16x16.png">
        <link rel="manifest" href="views/img/favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="views/img/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <!--Fin de favicon-->
        <meta charset="utf-8">
        <link rel="stylesheet" href="views/css/reglas.css">
        <link rel="stylesheet" href="views/css/animaciones.css">
        <link rel="stylesheet" href="views/css/header.css">
        <link rel="stylesheet" href="views/css/formulario.css">
        <script src="https://kit.fontawesome.com/2acee85606.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <?php include("views/includes/navbar.php") ?>
        <?php
                $routes=new Routes();
                $routes->rutas();
        ?>
    </body>
</html>