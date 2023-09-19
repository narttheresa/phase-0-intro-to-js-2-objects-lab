// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = { ...employee };
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "11 Broadway";
    return newEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployees = {...employee[key]}
    delete newEmployees[key];
    return newEmployees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}