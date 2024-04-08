export default function createEmployeesObject(departmentName, employees) {
  const employeesobject = {
    [departmentName]: employees,
  };
  return employeesobject;
}
