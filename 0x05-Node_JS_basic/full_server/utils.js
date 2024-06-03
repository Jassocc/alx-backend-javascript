// server utils file
const fs = require('fs');

function readDatabase(file) {
  const stud = {};
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const l = data.toString().split('\n');
        const noh = l.slice(1);
        for (let a = 0; a < noh.length; a += 1) {
          if (noh[a]) {
            const f = noh[a].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(stud, f[3])) {
              stud[f[3]].push(f[0]);
            } else {
              stud[f[3]] = [f[0]];
            }
          }
        }
        resolve(stud);
      }
    });
  });
}
module.exports = readDatabase;
