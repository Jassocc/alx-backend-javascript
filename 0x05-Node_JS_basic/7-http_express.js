//server for task 7
const exp = require('express');
const fs = require('fs');
const app = exp();
const port = 1245;

function countStudents(file) {
  const stud = {};
  const path = {};
  let l = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let out = '';
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
        out += `Number of students: ${b}\n`;
        for (const [k, v] of Object.entries(path)) {
          if (k !== 'field') {
            out += `Number of students in ${k}: ${v}. `;
            out += `List: ${stud[k].join(', ')}\n`;
          }
        }
        resolve(out);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((out) => {
    res.send(['This is the list of our students', out].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});
app.listen(port, () => {
});
module.exports = app;
