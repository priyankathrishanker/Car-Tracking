<?php
class dbconnect{
private $host = 'localhost';
private $dbname ='carlog';
private $user='root';
private $pass= '';

public function connect(){

try {
    $conn = new PDO('mysql:host='.$this->host . ';dbname=' . $this->dbname,$this->user,$this->pass);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $conn; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
}
?>
