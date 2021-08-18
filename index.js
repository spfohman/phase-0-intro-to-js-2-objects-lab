// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = {...employee};
    employees.name="Sam";
    employees.streetAddress="11 Broadway";
    return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name="Sam";
    employee.streetAddress="12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const employees={...employee};
    delete employees.name;
    return employees;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}