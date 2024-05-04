console.log("hello world!")
let monthlyCost = 0
function handleSubmit(event) {
    console.log('handle submit works...')
    event.preventDefault()
    let firstNameInput = document.getElementById('firstNameForm').value;
    let lastNameInput = document.getElementById('lastNameForm').value;
    let idNumberInput = document.getElementById('idForm').value;
    let titleInput = document.getElementById('titleForm').value;
    let annualSalaryInput = document.getElementById('annualSalaryForm').value;

console.log('name is: ', firstNameInput + ' ' + lastNameInput)

let tableContents = document.getElementById('table_content');
tableContents.innerHTML += `
<tr>
<td>${firstNameInput}</td>
<td>${lastNameInput}</td>
<td>${idNumberInput}</td>
<td>${titleInput}</td>
<td>$${annualSalaryInput}</td>
<td><button onClick="deleteRow(event)"> Delete </button></td>
</tr>
`
document.getElementById('firstNameForm').value = ""
document.getElementById('lastNameForm').value = ""
document.getElementById('idForm').value = ""
document.getElementById('titleForm').value = ""
document.getElementById('annualSalaryForm').value = ""

let monthlySalary = annualSalaryInput/12
let totalMonthly = document.getElementById('total_monthly')
monthlyCost += monthlySalary
totalMonthly.innerHTML = monthlyCost
}


function deleteRow(event){
console.log('delete function is working')
console.log(event)
let deleteTableRow = event.target.parentElement.parentElement
deleteTableRow.remove()

}

