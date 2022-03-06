

//Form

const sendForm = document.querySelector('form#send');

const errorsEl = document.querySelector('form#send .errors');

//Checking for our form
sendForm.addEventListener('submit', validateSendForm);

//Sprawia, ze nie mozna submit pustych labeli
function validateSendForm (e) {
    e.preventDefault();

    const firstname = document.querySelector('#send #firstname');
    const surname = document.querySelector('#send #surname');
    const phone = document.querySelector('#send #phone');
    const email = document.querySelector('#send #email');
    const message = document.querySelector('#send #message');

    let errors = [];

 //name regular expression validation
 //doesn't include polish letter ś,ć,ż ect. :(
 const nameReg = /^[a-zA-Z ]{3,}$/g;   

//template for identification proper email status
//email regular expression validation
const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//template for proper password valid.--> min.8 characters-->{8,}$  at least one upper case letter-->A-Z, at least one lower case letter-->a-z, and a number
//const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//template for only numbers in the field
const phoneReg = /^\d+$/;

//Checking if the input is empty

if (firstname.value == "") {
    errors.push({text: "nome", el: firstname});
 }   else if (!nameReg.test(firstname.value)) {
     errors.push({text: "nome", el: firstname});
   
}
  
if (surname.value == "") {
    errors.push({text: "prénom", el: surname});
// }   else if (!nameReg.test(surname.value)) {
//     errors.push({text: "prénom", el: surname});
}


if (phone.value == "") {
    errors.push({text: "phone", el: phone});
} else if (!phoneReg.test(phone.value)) {
    errors.push({text: "phone", el: phone});
}


if (email.value == "") {
    errors.push({text: "adresse mail", el: email});
}   else if (!emailReg.test(email.value)) {
    errors.push({text: "adresse mail", el: email});

}

if (message.value == "") {
    errors.push({text: "message", el: message});
}
  
if (errors.length > 0) {
    //alert('ERRORS');
    handleErrors(errors);
    return false;
}
 
//Appears after correct filling
//alert('SUBMITED');
    //return true;

///dodane
else {
    showPopup();
    return true;
}
///

}

function handleErrors(errs) {
    let str = "You have errors in the following fields: ";

    //add class "error" to the element
    errs.map((er) => {
        er.el.classList.add('error');
        str += er.text + " ,  ";
    });

    //add focus to first error
    errs[0].el.focus();

    //create error message for user
    let errorEl = document.createElement('div');
    errorEl.classList.add('error');
    errorEl.innerText = str;

    errorEl.addEventListener('click', function () {
        errorsEl.removeChild(errorEl);
    });


    errorsEl.appendChild(errorEl);
}


//added poup form and close option
function showPopup() {
  
    document.querySelector('.bg-modal').style.display = "flex";
    console.log("Dziala, wstépnie");

};


document.querySelector('.button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});