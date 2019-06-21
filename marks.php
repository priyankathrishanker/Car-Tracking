
 
<!DOCTYPE html>
<html>
<head>
<title>Map Example</title>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
#map_canvas { height: 330px; width: 550px; }
</style>
<script type="text/javascript"
src="http://maps.googleapis.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript">
function initialize() {
var latlng = new google.maps.LatLng(<?php echo $lat; ?>, <?php echo $long; ?>);
var addressMarker = new google.maps.LatLng(<?php echo $lat; ?>, <?php echo $long; ?>);
var myOptions = {
zoom: 15,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map_canvas"),
myOptions);
 
marker = new google.maps.Marker({ map:map, position: addressMarker });
}
 var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "<center><h1><b>Latitude:" + position.coords.latitude +"</b></h1>"+ 
  "<h1><b>Longitude: " + position.coords.longitude+"</b></h1></center>";
  var y=position.coords.latitude;
  var z=position.coords.longitude;
}
</script>
</head>
<body onload="initialize()">
<h2>Map Example</h2>
<div id="map_canvas"></div>
<?PHP
 
$url = "http://maps.google.com/maps/api/geocode/json?address=baner+pune&sensor=false";
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_PROXYPORT, 3128);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
$response = curl_exec($ch);
curl_close($ch);
 
$response = json_decode($response);
 
$lat = $response->results[0]->geometry->location->lat;
$long = $response->results[0]->geometry->location->lng;
?>
</body>
</html>