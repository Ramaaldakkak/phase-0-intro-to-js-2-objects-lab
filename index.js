// Write your solution in this file!

let employee = {
    name: "Walt Disney",
    streetAddress: "Disney"
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const updateEmployee = {...employee};
    updateEmployee[key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}