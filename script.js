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
    console.log('event: ', event, EventSource, EventTarget)

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
    let footerAlert = document.getElementById("footer_alert")

    console.log('class list: ', footerAlert.classList)
    console.log('footer alert has a value: ', footerAlert)
    let monthlySalary = annualSalaryInput / 12
    let totalMonthly = document.getElementById('total_monthly')
    monthlyCost += monthlySalary
    totalMonthly.innerHTML = Number(monthlyCost.toFixed(2))
    if (monthlyCost > 20000) {

        footerAlert.classList.add("over-budget", "overbudget")


    }
    console.log('footerAlert classlist: ', footerAlert.classList)
}



function deleteRow(event) {
    console.log('delete function is working')
    console.log(event)
    let deleteTableRow = event.target.parentElement.parentElement
    let deletedSalary = event.target.parentElement.previousSibling.previousSibling.innerHTML
    console.log('delete event info, tracking data: ', deletedSalary)
    let removeDollarSign = Number(deletedSalary.slice(1))
    let monthlyToDelete = removeDollarSign / 12
    console.log(monthlyToDelete)
    let totalMonthly = document.getElementById('total_monthly')
    let footerAlertRemove = document.getElementById("footer_alert")
    monthlyCost -= monthlyToDelete
    let newMonthly = monthlyCost
    totalMonthly.innerHTML = Number(newMonthly.toFixed(2))
    if (totalMonthly.innerText < 20000) {
        footerAlertRemove.classList.remove("overbudget", "over-budget")

    }
    if (totalMonthly.innerText < 1) {
        totalMonthly.innerHTML = ""

    }
    deleteTableRow.remove()

}


