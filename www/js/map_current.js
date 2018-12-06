var mapLat='';
var mapLong='';
var nwLat='';
var nwLong='';
// var currenAddress;
// var geocoder = new google.maps.Geocoder;
// var infowindow = new google.maps.InfoWindow;
navigator.geolocation.getCurrentPosition(showPosition);
function initMap() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    nwLat=mapLat.toString();
   nwLong=mapLong.toString()

} else {
  window.alert("Geolocation is not supported by this browser.");

}
  }

  // var x = document.getElementById("demo");

  function getLocation() {

  }

  function showPosition(position) {

    mapLat= position.coords.latitude;

   mapLong= position.coords.longitude;

    // window.alert(mapLat+'and'+mapLong);
// -------------------------------------------------------
// var latlng = {lat: parseFloat(mapLat), lng: parseFloat(mapLong)};
// geocoder.geocode({'location': latlng}, function(results, status) {
//     if (status === 'OK') {
//       if (results[0]) {
//
//         console.log(results[0].formatted_address);
//          currenAddress=results[0].formatted_address;
//          document.getElementById("info").innerHTML=currenAddress;
//         window.alert(results[0].formatted_address);
//       window.alert("data added");
//       } else {
//         window.alert('No results found');
//       }
//     } else {
//       window.alert('Geocoder failed due to: ' + status);
//     }
//   });

    //-------------------------------------------------
   var uluru = {lat: Number(mapLat), lng:Number(mapLong)};

   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: uluru
   });

   var marker = new google.maps.Marker({
 position: uluru,
 map: map
});


return {lat: mapLat, lng:mapLong};
  //  window.alert(mapLat+" and "+mapLong+ "(types: "+(typeof mapLat)+","+(typeof mapLong)+")");

  }
