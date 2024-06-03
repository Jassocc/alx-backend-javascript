// create a server for task 5
const http = require('http');
const fs = require('fs');
const host = 'localhost';
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
        out += `Number of students: ${b}`;
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((out) => {
      const outp = out.slice(0, -1);
      res.end(outp);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});
app.listen(port, host, () => {
});
module.exports = app;
