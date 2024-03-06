// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
var employeeData = []
  // {
  //   firstName: "Jesse",
  //   lastName: "Coronoa",
  //   salary: 100000.00
  // }, 



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  var firstname = prompt("First name?")
  var lastname = prompt("Last name?")
  var salary = prompt("salary?")

    employeeData.push({firstName: firstname, lastName: lastname, salary: salary})

    if(confirm("Do you want to add more employees?")){
      collectEmployees()
    } else {
      console.log(employeeData)
      displayEmployees(employeeData)
      displayAverageSalary(employeeData)
      getRandomEmployee(employeeData)
    }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0
  for (let I = 0; I < employeesArray.length; I++) {
   total = total + parseFloat(employeesArray[I].salary)
  } 
  total = total / employeesArray.length;
  console.log (total)

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  console.log(employeesArray[Math.floor(Math.random()* employeesArray.length)])
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  let employees = collectEmployees();
  console.log
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', collectEmployees);
