//The function which ensure the user input every blank of form 
//Declares the variables
const form = document.querySelector('form');
const thank = document.querySelector(".thank");
const dateInput = document.querySelector('input[name="date"]');
const timeInput = document.querySelector('input[name="time"]');
const firstnameInput = document.querySelector('input[name="firstname"]');
const lastnameInput = document.querySelector('input[name="lastname"]');
const mailInput = document.querySelector('input[name="mail"]');
const mobileInput = document.querySelector('input[name="mobile"]');
const cardnameInput = document.querySelector('input[name="cardname"]');
const cardnumberInput = document.querySelector('input[name="cardnumber"]');
const expirationdateInput = document.querySelector('input[name="expirationdate"]');
const cvcInput = document.querySelector('input[name="cvc"]');

var divoutput = document.getElementById('divoutput');
var Input = [firstnameInput,
    lastnameInput,
    mailInput,
    mobileInput,
    cardnameInput,
    cardnumberInput,
    expirationdateInput,
    cvcInput];

//Default hints are hidden.
let isFormValid = false;


//Verify the input has some types of value, otherwise display the hidden hints.
//Show the hint when there is no value in the blank
const validateInputs = () => {
    for (var i = 0; i < Input.length; i++) {
        const item = Input[i]
        item.nextElementSibling.classList.add("hidden")
    }
    isFormValid = true;

    //If the value have no types of value, then show the hint.
    for (var i = 0; i < Input.length; i++) {
        const item = Input[i]
        if (!item.value) {
            isFormValid = false;
        }
    }

};


//When users click 'submit' then will check the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); //Users can do edit before finish the form with complete value so that the page will not refresh. 
    validateInputs();
    //When submit the complete form then display the finish message
    if (isFormValid) {
        form.remove();
        thank.classList.remove("hidden");
        //Shows 'Thank you message' when user submit the form with all required value.
        divoutput.innerHTML += "Thank you " + firstnameInput.value + " for booking at Healing Resort,<br>We have sent the confirmation to your mail!!<br>" + "</p>";
        divoutput.innerHTML += "See you on " + dateInput.value;
        divoutput.innerHTML += " " + timeInput.value
    } else {
        for (var i = 0; i < Input.length; i++) {
            const item = Input[i]
            if (!item.value) {
                item.nextElementSibling.classList.remove("hidden");
            }
        }
    }
});

//Check value to validateInputs()
for (var i = 0; i < Input.length; i++) {
    const item = Input[i]
    item.addEventListener("input", () => {
        validateInputs();
    })
}


//Calculate the total price
//Declares variable for package and number
var package = document.getElementById("package"),
    packageValue = package.value;
var number = document.getElementById("number"),
    numberValue = number.value;

//Do the calculate() funtion when the value has changed.
package.onchange = () => calculate();
number.onchange = () => calculate();

//Sets the package value * number value
function calculate() {
    packageValue = package.value;
    numberValue = number.value;

    var sum = 0;
    var a = +packageValue;
    var b = +numberValue;

    //Calculate the total number
    sum = a * b;
    document.getElementById("total").value = sum;
}

calculate()