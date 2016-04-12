//$("#map").css("display","none");
navigator.geolocation.getCurrentPosition(onSuccess, onError);
function onSuccess(position) {
var element = document.getElementById('map');
lati = position.coords.latitude;
long = position.coords.longitude;
initMap();
}
function onError(error) {
alert('code: ' + error.code + 'n' +
'message: ' + error.message + 'n');
}
var map;
var infowindow;
function initMap() {
  var pyrmont = {lat: lati, lng: long};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 1
  });
 document.getElementById('map').style.visibility = 'hidden';
var keyword = location.hash.replace("#","");
//document.getElementById("key").innerHTML = keyword.toUpperCase();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    types: [keyword]
  }, callback);
}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var placeLoc = results[i].geometry.location;
  var placeName = results[i].name;
  var address = results[i].vicinity;
  $( "div#display" ).append( $( "<div data-role='collapsible'><h1>" + placeName + "</h1><p>" + address + "</p></div>" ) );
$('[data-role=collapsible').collapsible();
    }
    $("#map").remove();
  }
}
function Myfunc(){
    var val = document.getElementById("choice").value;
    window.location.href = "map.html#"+val;
}
function loader(){
      $('div.cssload-thecube').hide();
  }
