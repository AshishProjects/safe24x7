var latPos, longPos, Address;
var geocoder = new google.maps.Geocoder;
var infowindow = new google.maps.InfoWindow;
var myId= sessionStorage.getItem("myIdd");
var timeDate=new Date();



function getLocation() {
  // window.alert("hello");
  if (navigator.geolocation) {
      // window.alert("hello");
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      window.alert("Geolocation is not supported by this browser.");
  }
}




function showPosition(position) {
     latPos= position.coords.latitude;

    longPos= position.coords.longitude;

    window.alert(latPos+"  "+ longPos);



var latlng = {lat: parseFloat(latPos), lng: parseFloat(longPos)};
geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {

        console.log(results[0].formatted_address);
         Address=results[0].formatted_address;
        window.alert(results[0].formatted_address);
        db.collection('Location').add({
            lat : latPos,
            long: longPos,
            address:Address,
            userId:myId,
            Time:timeDate
            });
      window.alert("data added");
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
