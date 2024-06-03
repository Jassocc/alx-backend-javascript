//  read the database file asynchronously
const fs = require('fs');

function countStudents(file) {
  const stud = {};
  const path = {};
  let l = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lin = data.toString().split('\n');
        for (let a = 0; a < lin.length; a += 1) {
          if (lin[a]) {
            l += 1;
            const field = lin[a].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(stud, field[3])) {
              stud[field[3]].push(field[0]);
            } else {
              stud[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(path, field[3])) {
              path[field[3]] += 1;
            } else {
              path[field[3]] = 1;
            }
          }
        }
        const b = l - 1;
        console.log(`Number of students: ${b}`);
        for (const [k, v] of Object.entries(path)) {
          if (k !== 'field') {
            console.log(`Number of students in ${k}: ${v}. List: ${stud[k].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}
module.exports = countStudents;
