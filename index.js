// Write your solution in this file!
const employee = {
    name: "Yavin",
    streetAddress: "20 surprise st",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee}
    employee[key] = `Sam`
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name
    return employee
}