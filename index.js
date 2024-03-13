// Write your solution in this file!

const employee = {
    Sam: "11 Broadway",
};

function updateEmployeeWithKeyAndValue() {
    const employee = {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    }
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}