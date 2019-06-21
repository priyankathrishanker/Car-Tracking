<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "carlog";

$conn = new mysqli_connect($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 
$vehicleno='1234567';
//$vehicleno = mysqli_real_escape_string($conn, $_POST['vehicleno']);
$latitude = mysqli_real_escape_string($conn, $_POST['latitude']);
$longitude = mysqli_real_escape_string($conn, $_POST['longitude']);


$sql = "INSERT INTO latlong (vehicleno,latitude,longitude)
VALUES ('$vehicleno','$latitude', '$longitude')";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>