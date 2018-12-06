const myContacts=document.querySelector('#myContacts');
var myId;
myId=sessionStorage.getItem("myIdd").toString();

  // window.alert("view contact = "+myId);





  db.collection('Contacts').where('userId','==',myId).get().then((snapshot) => {
    console.log(snapshot.docs);

      snapshot.docs.forEach( doc => {
          console.log(doc.data());
        randerContacts(doc);
        //  will render all data to the function.
      })

  });





function randerContacts(doc)
{

let li= document.createElement('li');
let name = document.createElement('span');
let edit =document.createElement('button')
let cross= document.createElement('button');
cross.textContent='x';
edit.textContent='Edit'
li.setAttribute('data-id', doc.id);

name.textContent=doc.data().Name;

li.appendChild(name);
li.appendChild(cross);
li.appendChild(edit);
myContacts.appendChild(li);

cross.addEventListener('click', (e)=>{
  //  stopPropgation will stop cross from bubbling up
  e.stopPropagation();
          //  event.cross.parentElement i.e li. getAttribute tis to get id from parent.
          // data-id will give us the unique id of doc in firestore.
  let id= e.target.parentElement.getAttribute('data-id');
  // to find the individual doc we use .doc
  db.collection('Contacts').doc(id).delete();

})

edit.addEventListener('click', (e)=>{

  let contactId=e.target.parentElement.getAttribute('data-id');
  sessionStorage.setItem('contId',contactId);
  // window.alert("click "+contactId);

  window.location.href="updateContact.html";

})
// 
// edit.onclick(window.location.href("updateContact.html"))
}
