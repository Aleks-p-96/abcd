'use strict'

const mainForm = document.forms.main;
const mainFormName = mainForm.nameInput;
const mainFormAge = mainForm.ageInput;
const mainFormCity = mainForm.cityInput;

console.log(mainForm);
console.log(mainFormName);
console.log(mainFormAge);
console.log(mainFormCity);

const mainFormResult = document.createElement('div');

mainForm.addEventListener('submit', function(event) {
    mainFormResult.innerHTML = `${mainFormName.value},${mainFormAge.value} years old, lives in ${mainFormCity.value}`
    mainForm.after(mainFormResult);
    console.log(mainFormResult);
    event.preventDefault();
});
