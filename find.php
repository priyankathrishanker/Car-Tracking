<html>
<head>
<iframe width='100%' height='100%' id='mapcanvas' src='https://maps.google.com/maps?q=svce,sriperumbadur&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'><div style='overflow:hidden;'><div id='gmap_canvas' style='height:100%;width:100%;'><div class="zxos8_gm"><a rel="nofollow"  href="https://youtubevideoembed.com/add-youtube-videos-powerpoint/">powerpoint</a></div></div></div><div><small>Powered by <a href="https://www.embedgooglemap.co.uk">Embed Google Map</a></small></div></iframe>

<script type="text/javascript">
function initialize() {
  // var latlng = new google.maps.LatLng(43.66106,-79.39488);
     var latlng = new google.maps.LatLng(12.9871,79.9721);
    var map = new google.maps.Map(document.getElementById('map'), {
      center: latlng,
      //zoom: 13
      zoom:20
    });
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      draggable: true,
      anchorPoint: new google.maps.Point(0, -29)
   });
    var infowindow = new google.maps.InfoWindow();   
    google.maps.event.addListener(marker, 'click', function() {
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title"><b>Location</b> : SVCE</div></div>';
      // including content to the infowindow
      infowindow.setContent(iwContent);
      // opening the infowindow in the current map and at the current marker location
      infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>
<body>
<div id="map" style="width: 100%; height: 300px;">
<?php
require 'location.php';
$loc= new location;
$scoll=$loc->getlatlong();
print_r($scoll);exit;
?>
</div>
</body>
</html>
