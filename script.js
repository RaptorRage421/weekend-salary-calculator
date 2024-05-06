console.log("hello world!")
let monthlyCost = 0
renderTotalMonthly()
//! render monthly cost function with conditionals to update the CSS and DOM
function renderTotalMonthly() {
    let totalMonthly = document.getElementById('total_monthly')
    totalMonthly.innerHTML = Number(monthlyCost.toFixed(2))
    let footerAlert = document.querySelector('footer')
    if (monthlyCost > 20000) {
        footerAlert.classList.add("over-budget", "overbudget")
    }
    else if (monthlyCost < 20000) {
        footerAlert.classList.remove("over-budget", "overbudget")
    }
    if (monthlyCost < 1) {
        monthlyCost = 0
    }
    if (totalMonthly.innerText < 1) {
        totalMonthly.innerText = 0
    }
    console.log("Current Total Monthly: ", Number(monthlyCost.toFixed(2)))
}

function handleSubmit(event) {
    console.log(console.log(`
    \t ************** 
    \t *** SUBMIT ***
    \t **************`))
    event.preventDefault()
    //! input fields
    let firstNameInput = document.getElementById('firstNameForm').value;
    let lastNameInput = document.getElementById('lastNameForm').value;
    let idNumberInput = document.getElementById('idForm').value;
    let titleInput = document.getElementById('titleForm').value;
    let annualSalaryInput = document.getElementById('annualSalaryForm').value;

    //! console log to clearly show all the input data
    console.log(`Name is: ${firstNameInput} ${lastNameInput}
    \t ID Number: ${idNumberInput}
    \t Job Title: ${titleInput}
    \t Annual Salary: $${annualSalaryInput}`)
    // console.log('event: ', event, EventSource, EventTarget)
    //! push the values inot the table
    let tableContents = document.getElementById('table_content');
    tableContents.innerHTML += `
<tr>
<td>${firstNameInput}</td>
<td>${lastNameInput}</td>
<td>${idNumberInput}</td>
<td>${titleInput}</td>
<td class="number">$${annualSalaryInput}</td>
<td class="clicker"><button onClick="deleteRow(event)">Delete</button></td>
</tr>
`
    //! reset the form
    document.getElementById('reset').reset()
    //! monthly cost math
    let monthlySalary = annualSalaryInput / 12
    console.log('Monthly Cost Added:', Number(monthlySalary.toFixed(2)))
    monthlyCost += monthlySalary
    //! run renderTotalMonthly
    renderTotalMonthly()

}



function deleteRow(event) {
    console.log(`
    \t ************** 
    \t *** DELETE ***
    \t **************`)
    // console.log(event)

    //! defining the element that needs to be deleted
    let deleteTableRow = event.target.parentElement.parentElement
    //!  These are for console log output.
    let deletedFirstName = event.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousElementSibling.innerText
    let deletedLastName = event.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText
    let deletedPerson = `${deletedFirstName} ${deletedLastName}`
    console.log('Person Being Removed:', deletedPerson)
    //! this is to capture removed Salary info from the event
    let deletedSalary = event.target.parentElement.previousSibling.previousSibling.innerHTML
    //! this is slicing off the first character which is always a "$"
    let removeDollarSign = Number(deletedSalary.slice(1))
    console.log('Salary Being Removed:', removeDollarSign)
    let monthlyToDelete = Number((removeDollarSign / 12).toFixed(2))

    console.log('Current Monthly Cost:', Number(monthlyCost.toFixed(2)))
    console.log('Monthly Cost Removed:', monthlyToDelete)
    //! The math to remove the value from the monthlyCost
    monthlyCost -= Number(monthlyToDelete.toFixed(2))
    //! rendering New Cost
    renderTotalMonthly()
    //! actual delete action for the Row
    deleteTableRow.remove()
}


