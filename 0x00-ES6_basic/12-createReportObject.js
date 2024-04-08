export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const departmentName in employeesList) {
    if (Object.prototype.hasOwnProperty.call(employeesList, departmentName)) {
      allEmployees[departmentName] = [...employeesList[departmentName]];
    }
  }
  const getNumberOfDepartments = () => Object.keys(allEmployees).length;
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
