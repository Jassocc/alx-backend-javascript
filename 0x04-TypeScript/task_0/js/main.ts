export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Laurel",
  lastName: "Yamaha",
  age: 12,
  location: "Sahara, Dubai",
};
const student2: Student = {
  firstName: "Anja",
  lastName: "Ndlovu",
  age: 58,
  location: "Washington, US",
};
const studentsList: Array<Student> = [
  student1,
  student2,
];

export const renderTable = (studentsList: Array<Student>): void => {
  const tab = document.createElement('table');
  const hrow = document.createElement('tr');
  tab.insertAdjacentElement('beforeend', hrow);
  hrow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  hrow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  for (const stud of studentsList) {
    const studrow = document.createElement('tr')
    studrow.insertAdjacentHTML('beforeend', `<td>${stud.firstName}</td>`);
    studrow.insertAdjacentHTML('beforeend', `<td>${stud.location}</td>`);
    tab.insertAdjacentElement('beforeend', studrow);
  }
  document.body.insertAdjacentElement('beforeend', tab);
}
renderTable(studentsList);
