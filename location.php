<?php
class location
{
	private $vehicle no;
	private $latitude;
	private $longitude;
	private $conn;
	private $tablename="latlog";
	function setVehicle no($vehicle no) { $this->vehicle no = $vehicle no; }
	function getVehicle no() { return $this->vehicle no; }
	function setLatitude($latitude) { $this->latitude = $latitude; }
	function getLatitude() { return $this->latitude; }
	function setLongitude($longitude) { $this->longitude = $longitude; }
function getLongitude() { return $this->longitude; }

	public function__construct()
	{
		require_once('dbconnect.php');
		$conn=new dbconnect;
		$this->conn=$conn->connect();
	}
	public function getlatlong(){
		$sql = "SELECT * FROM $this->tablename WHERE lat IS NULL AND lng IS NULL ";
		$stmt=$this->conn->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
		
	}
}
?>
