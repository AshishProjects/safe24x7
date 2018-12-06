var emailId;
var passwordId;
var myId;
var myname;
const form = document.querySelector('#loginForm');


function loginId(event)
{
event.preventDefault();
// console.log(db);
emailId= document.getElementById("email").value;
passwordId= document.getElementById("pass").value;
// window.alert(emailId+" "+passwordId);


db.collection('Account').where('Email','==',emailId).get().then((snapshot) => {
  if(snapshot.docs.length == 0) {
     // window.alert("no database");
   document.getElementById("on-no-response").innerHTML="Invalid Email id";
   email.value='';
   pass.value='';
  }
  else {

          // console.log(snapshot.docs);

            snapshot.docs.forEach( doc => {
                // console.log(doc.data());
                console.log(doc.data().Password);

                if(doc.data().Password != passwordId)
                {
                  document.getElementById("on-no-response").innerHTML="Invalid Password";
                  email.value='';
                  pass.value='';
                }
                else {
                  myId=doc.id;
                  myname=doc.data().FirstName;
                  // console.log(doc.id);
                  console.log("this is the id ? "+ myId)
                  sessionStorage.setItem("myname", myname);
                  sessionStorage.setItem("myIdd", myId);
                  window.open("dashboard.html","_self");
                }
              // console.log(doc.id);
              myId=doc.id;
            //   randercafe(doc);
            //    will render all data to the function.
            }

)
}

    });
}
