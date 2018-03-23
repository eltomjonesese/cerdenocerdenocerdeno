<?php

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        require_once '../../vendor/backbone.php';
?>
    <h2>Registro de entrada</h2>
<?php
    }
?>
<h3>NOmbre</h3>
<form action='' method="post">
    <input type="text" name="nombre" />
</form>

<?php
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        require_once '../../vendor/backbone.php';
    }
?>