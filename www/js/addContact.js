
const form = document.querySelector('#form2');
var myId;
myId=sessionStorage.getItem("myIdd");
// window.alert(myId);

form.addEventListener('submit', (e) =>{

    //  (e) => to prevent default action to work coz if we click  the button it reload the page and we don't want that
    // wht we want is to prevent the action and just to interact with firebase.

    e.preventDefault();
    // this won't refresh the page.

    // db is the const defined in html it is the reference.
    // add will take parameter as object ad the object will represent document.
         // window.alert("hello1");
    db.collection('Contacts').add({



    // in this doc we will specify name prop, email prop, and passwor prop.
    // doc name : form name(value of name in form i.e name=name). value(to grab the value in the field)
    Email : form.email.value,
    Name : form.name.value,
    Phone : form.phone.value,
    userId: myId,

    })
    window.alert("added");
    form.email.value='';
    form.name.value='';
    form.phone.value='';

    });
