// Write your solution in this file!
<<<<<<< HEAD
const employee = {};
=======
>>>>>>> f965a799ec40f735950dd8be598448eddf714537
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };
  newObj[key] = value;
  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const obj = { ...employee };
  delete obj[key];
  return obj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
