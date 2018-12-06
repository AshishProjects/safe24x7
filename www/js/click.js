var btcolor;

btcolor = document.getElementById('alert');

function getLocation()
{
  if (btcolor.value.match("SOS")) {
       btcolor.value="ACTIVE";
     }

     else {
       btcolor.value="SOS";
       // navigator.geolocation.clearWatch(id);
       window.alert("in-active");
     }

}
