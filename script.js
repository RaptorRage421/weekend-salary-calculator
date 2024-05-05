console.log("hello world!")
let monthlyCost = 0




function handleSubmit(event) {
    console.log(console.log(`
        ************** 
        *** SUBMIT ***
        **************`))
    event.preventDefault()
    let firstNameInput = document.getElementById('firstNameForm').value;
    let lastNameInput = document.getElementById('lastNameForm').value;
    let idNumberInput = document.getElementById('idForm').value;
    let titleInput = document.getElementById('titleForm').value;
    let annualSalaryInput = document.getElementById('annualSalaryForm').value;

    console.log(`Name is: ${firstNameInput} ${lastNameInput}
    \t ID Number: ${idNumberInput}
    \t Job Title: ${titleInput}
    \t Annual Salary: $${annualSalaryInput}`)
    // console.log('event: ', event, EventSource, EventTarget)

    let tableContents = document.getElementById('table_content');
    tableContents.innerHTML += `
<tr>
<td>${firstNameInput}</td>
<td>${lastNameInput}</td>
<td>${idNumberInput}</td>
<td>${titleInput}</td>
<td id="salaryTable">$${annualSalaryInput}</td>
<td><button onClick="deleteRow(event)"> Delete </button></td>
</tr>
`
    document.getElementById('firstNameForm').value = ""
    document.getElementById('lastNameForm').value = ""
    document.getElementById('idForm').value = ""
    document.getElementById('titleForm').value = ""
    document.getElementById('annualSalaryForm').value = ""
    let footerAlert = document.getElementById("footer_alert")
    let footerExtra = document.getElementById("special-add")
    // console.log('class list: ', footerAlert.classList)
    // console.log('footer alert has a value: ', footerAlert)
    let monthlySalary = annualSalaryInput / 12
    console.log('Monthly Cost Added: ', Number(monthlySalary.toFixed(2)))
    let totalMonthly = document.getElementById('total_monthly')
    monthlyCost += monthlySalary

    totalMonthly.innerHTML = Number(monthlyCost.toFixed(2))
    if (monthlyCost > 20000) {

        footerAlert.classList.add("over-budget")
        footerExtra.classList.add("overbudget")


    }
    // console.log('footerAlert classlist: ', footerAlert.classList)
}



function deleteRow(event) {
    console.log(`
        ************** 
        *** DELETE ***
        **************`)
    // console.log(event)
    let deleteTableRow = event.target.parentElement.parentElement
    let deletedFirstName = event.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousElementSibling.innerText
    let deletedLastName = event.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    let deletedPerson = `${deletedFirstName} ${deletedLastName}`
    console.log('Person Being Removed: ', deletedPerson)
    let deletedSalary = event.target.parentElement.previousSibling.previousSibling.innerHTML
    console.log('Salary Being Removed', deletedSalary)
    let removeDollarSign = Number(deletedSalary.slice(1))
    let monthlyToDelete = Number((removeDollarSign / 12).toFixed(2))
    console.log('Current Monthly Cost: ', Number(monthlyCost.toFixed(2)))
    console.log('Monthly Cost being Removed', monthlyToDelete)
    let totalMonthly = document.getElementById('total_monthly')
    let footerAlertRemove = document.getElementById("footer_alert")
    let footerExtraRemove = document.getElementById('special-add')

    monthlyCost -= Number(monthlyToDelete.toFixed(2))

    let newMonthly = Number(monthlyCost.toFixed(2))
    totalMonthly.innerHTML = Number(newMonthly.toFixed(2))
    if (totalMonthly.innerText < 20000) {
        footerAlertRemove.classList.remove("over-budget")
        footerExtraRemove.classList.remove("overbudget")

    }
    if (newMonthly < 1) {
        newMonthly = 0
    }
    if (monthlyCost < 1) {
        monthlyCost = 0
    }
    if (totalMonthly.innerText < 1) {
        totalMonthly.innerText = ""

    }
    console.log('New Monthly Cost: ', Number(monthlyCost.toFixed(2)))
    deleteTableRow.remove()

}


