var contactId,useridno;
var name, phone,email;
contactId=sessionStorage.getItem("contId");
useridno= sessionStorage.getItem('myIdd')
// contactId=U3OuSJz7tm24AaU5eGBs;
// window.alert(contactId);

db.collection('Contacts').get().then((snapshot) => {
  console.log(snapshot.docs);

      snapshot.docs.forEach( doc => {

        if (doc.id==contactId) {



        console.log(doc.data());
      randerUpdateContact(doc);
      //  will render all data to the function.

    }
    })
});


function randerUpdateContact(doc)
{
// window.alert(doc.data().Name);

document.getElementById('name').value=doc.data().Name;
document.getElementById('phone').value=doc.data().Phone;
document.getElementById('email').value=doc.data().Email;

// name1=document.getElementById('name');

}

function updateData()
{
  name=document.getElementById('name').value;
  phone=document.getElementById('phone').value;
  email=document.getElementById('email').value;

   // console.log(email);
  db.collection('Contacts').doc(contactId).set({

        Name:name,
        Phone:phone,
        Email:email,
        userId:useridno

  });

}
