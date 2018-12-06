var contactId,useridno;
var firstname,lastname, phone,email,passwordUser,userIdname,idType,idInfo;
// contactId=sessionStorage.getItem("contId");
useridno= sessionStorage.getItem('myIdd')
// contactId=U3OuSJz7tm24AaU5eGBs;
// window.alert(contactId);

db.collection('Account').get().then((snapshot) => {
  console.log(snapshot.docs);

      snapshot.docs.forEach( doc => {

        if (doc.id==useridno) {



        console.log(doc.data());
      randerUpdateContact(doc);
      //  will render all data to the function.

    }
    })
});


function randerUpdateContact(doc)
{
// window.alert(doc.data().Name);

document.getElementById('fname').value=doc.data().FirstName;

document.getElementById('lname').value=doc.data().LastName;
document.getElementById('email').value=doc.data().Email;
document.getElementById('user').value=doc.data().UserName;
document.getElementById('pass').value=doc.data().Password;
document.getElementById('phone').value=doc.data().Phone;
document.getElementById('ver1').value=doc.data().IdInput;
document.getElementById('ver2').value=doc.data().IdInput;
document.getElementById('iddata').value=doc.data().IdData;


// name1=document.getElementById('name');

}

function updateData()
{
  firstname=document.getElementById('fname').value;
  lastname=document.getElementById('lname').value;
  passwordUser=document.getElementById('pass').value;
  email=document.getElementById('email').value;
  userIdname=document.getElementById('user').value;
  phone=document.getElementById('phone').value;
  idType=document.getElementById('ver1').value;
  idType=document.getElementById('ver2').value;
  idInfo=document.getElementById('iddata').value;

   // console.log(email);
  db.collection('Account').doc(useridno).set({

        FirstName:firstname,
        LastName:lastname,
        Phone:phone,
        Email:email,
        Password:passwordUser,
        UserName:useeIdname,
        IdInput:idType,
        IdData:idInfo,


  });

}
