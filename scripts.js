console.log("hello world!")

function handleSubmit(event) {
    console.log('handle submit works...')
    event.preventDefault()
    let firstNameInput = document.getElementById('firstNameForm').value;
    let lastNameInput = document.getElementById('lastNameForm').value;
    let idNumberInput = document.getElementById('idForm').value;
    let titleInput = document.getElementById('titleForm').value;
    let annualSalaryInput = document.getElementById('annualSalaryForm').value;

console.log('name is: ', firstNameInput + ' ' + lastNameInput)

let tableContents = document.getElementById('content');
tableContents.innerHTML += `
<tr>
<td>${firstNameInput}</td>
<td>${lastNameInput}</td>
<td>${idNumberInput}</td>
<td>${titleInput}</td>
<td>$${annualSalaryInput}</td>
<td><button onClick="deleteRow()"> Delete </button></td>
</tr>
`
document.getElementById('firstNameForm').value = ""
document.getElementById('lastNameForm').value = ""
document.getElementById('idForm').value = ""
document.getElementById('titleForm').value = ""
document.getElementById('annualSalaryForm').value = ""



}


