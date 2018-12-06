
const form = document.querySelector('#form1');

form.addEventListener('submit', (e) =>{
    // window.alert("hello1");
    //  (e) => to prevent default action to work coz if we click  the button it reload the page and we don't want that
    // wht we want is to prevent the action and just to interact with firebase.

    e.preventDefault();
    // this won't refresh the page.

    // db is the const defined in html it is the reference.
    // add will take parameter as object ad the object will represent document.

    db.collection('Account').add({

    // in this doc we will specify name prop, email prop, and passwor prop.
    // doc name : form name(value of name in form i.e name=name). value(to grab the value in the field)
    Email : form.email.value,
    FirstName: form.fn.value,
    LastName: form.ln.value,
    UserName: form.us.value,
    Phone: form.ph.value,
    Password: form.pas.value,
    IdInput: form.ver.value,
    IdData: form.iddata.value,

    })

    form.email.value='';
    form.fn.value='';
    form.ln.value='';
    form.us.value='';
    form.ph.value='';
    form.pas.value='';
    form.ver.value='';
    form.iddata.value='';


    });
