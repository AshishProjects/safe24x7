
var latPos, longPos, Address;
var geocoder = new google.maps.Geocoder;
var infowindow = new google.maps.InfoWindow;
var myId= sessionStorage.getItem("myIdd");
var timeDate=new Date();
const myloc= document.querySelector('myCurrentLoc');
var currentLocation;


function getMyLocation()
 {
   // event.preventDefault();
  // window.alert("hello");
  if (navigator.geolocation) {
      // window.alert("hello");
      navigator.geolocation.getCurrentPosition(showCurrentPosition);
      setTimeout(function(){ randerLocation(currentLocation); }, 5000);
       // randerLocation(currentLocation);
  } else {
      window.alert("Geolocation is not supported by this browser.");
  }
}




function showCurrentPosition(position) {
     latPos= position.coords.latitude;

    longPos= position.coords.longitude;

    //window.alert(latPos+"  "+ longPos);



var latlng = {lat: parseFloat(latPos), lng: parseFloat(longPos)};
geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {

        console.log(results[0].formatted_address);
         Address=results[0].formatted_address;
        //window.alert(results[0].formatted_address);
        db.collection('Location').get().then((snapshot)=> {


             snapshot.docs.forEach(doc=>{

               currentLocation=doc.data().address;

               //window.alert(currentLocation);

             });


        });
      //   {
      //       lat : latPos,
      //       long: longPos,
      //       adress:Address,
      //       userId:myId,
      //       Time:timeDate
      //
      // window.alert("data added");
      }
       else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}


function randerLocation(doc)
{
  let li= document.createElement('li');
  let address= document.createElement('span');
  let latitude = document.createElement('span');
  let longitude = document.createElement('span');
  let time = document.createElement('span');
  // add creoos for del.
  // let cross= document.createElement('div');
  // cross.textContent='x';
   address.textContent=doc.data().adress;
   latitude.textContent=doc.data().lat;
   longitude.textContent=doc.data().long;
   time.textContent=doc.data().Time;
   // cross.onclick("my-location")
   // {
   //   var e= document.getElementById("my-location");
   //   e.style.display='none';
   // }


       li.appendChild(address);
       li.appendChild(latitude);
       li.appendChild(longitude);
       li.appendChild(time);
       // li.appendChild(cross);

       myCurrentLoc.appendChild(li);

}
