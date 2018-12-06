var latPos, longPos, Address;
var geocoder = new google.maps.Geocoder;
var infowindow = new google.maps.InfoWindow;
var myId= sessionStorage.getItem("myIdd");
var myname= sessionStorage.getItem("myname");
var timeCheck=new Date().getTime();
var check;
var btcolor
var id, target, options;
 btcolor = document.getElementById('alert');




function getLocation() {
  // window.alert("hello");
  if (btcolor.value.match("SOS")) {
       btcolor.value="ACTIVE";
  if (navigator.geolocation) {
      // window.alert("hello");
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      window.alert("Geolocation is not supported by this browser.");
  }
}

else {
  btcolor.value="SOS";
  navigator.geolocation.clearWatch(id);
  // window.alert("in-active");
}
}

function showPosition(position) {
     latPos= position.coords.latitude;

    longPos= position.coords.longitude;

    // window.alert(latPos+"  "+ longPos);



var latlng = {lat: parseFloat(latPos), lng: parseFloat(longPos)};
console.log(latlng);
geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {

        console.log(results[0].formatted_address);
         Address=results[0].formatted_address;
        // window.alert(results[0].formatted_address);
        db.collection('location-notification').add({
            lat : latPos,
            long: longPos,
            address:Address,
            userId:myId,
            time:new Date(),
            timeInMS: new Date().getTime(),
            name:myname
            });
      // window.alert("data added");
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}


function errorHandler(err) {
           if(err.code == 1) {
              alert("Error: Access is denied!");
           } else if( err.code == 2) {
              alert("Error: Position is unavailable!");
           }
        }

        function getLocationUpdate(){

           if(navigator.geolocation){

              // timeout at 60000 milliseconds (60 seconds)
              var options = {timeout:60000};
              geoLoc = navigator.geolocation;
              watchID = geoLoc.watchPosition(showPosition, errorHandler, options);
           } else {
              alert("Sorry, browser does not support geolocation!");
           }
        }

        db.collection("location-notification").onSnapshot((querySnapshot) => {
            db.collection("location-notification").where("timeInMS", ">", timeCheck).orderBy("timeInMS").limit(1).get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  cordova.plugins.notification.local.schedule({
                     title:"ALERT",
                     text:myname+'Need help! near '+Address,
                     foreground:true
                   });
                  console.log(doc.id, " => ", doc.data());
              });
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            console.log("querySnapshot._snapshot.oldDocs.size: "+ querySnapshot._snapshot.oldDocs.size);
        });
