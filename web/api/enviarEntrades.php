<?php
// Establecer la conexión a la base de datos
$servername = "localhost";
$username = "";
$password = "";
$dbname = "";
$port = 3306;

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

// Iniciar la transacción
$conn->begin_transaction();

try {
    // Recibir el array de objetos por POST
    $entrades = json_decode($_POST['entrades'], true);

    // Iterar sobre cada objeto y realizar la inserción en la tabla
    foreach ($entrades as $entrada) {
        $id_sessio = $entrada['id_sessio'];
        $id_butaca = $entrada['id_butaca'];
        $tipus_butaca = $entrada['tipus_butaca'];
        $preu = $entrada['preu'];
        $data_compra = $entrada['data_compra'];
        $correu = $entrada['correu'];

        // Preparar la consulta SQL para insertar los datos en la tabla
        $sql = "INSERT INTO Entrada (id_sessio, id_butaca, tipus_butaca, preu, data_compra, correu) 
                VALUES ('$id_sessio', '$id_butaca', '$tipus_butaca', '$preu', '$data_compra', '$correu')";

        if ($conn->query($sql) === FALSE) {
            throw new Exception("Error al insertar entradas.");
        }
    }

    // Commit de la transacción si todo ha ido bien
    $conn->commit();
    echo "Las entradas se han insertado correctamente.";
} catch (Exception $e) {
    // Rollback de la transacción en caso de error
    $conn->rollback();
    echo "Error: " . $e->getMessage();
}

// Cerrar la conexión
$conn->close();
?>