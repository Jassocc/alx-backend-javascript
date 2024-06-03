// function to count students with args
const fs = require('fs');

const countStudents = (path) => {
  try {
    let da = fs.readFileSync(path, 'utf-8').toString().split('\n');
    da = da.slice(1, da.length - 1);
    console.log(`Number of students: ${da.length}`);
    const sub = {};
    for (const r of da) {
      const stud = r.split(',');
      if (!sub[stud[3]]) sub[stud[3]] = [];
      sub[stud[3]].push(stud[0]);
    }
    for (const subj in sub) {
      if (subj) console.log(`Number of students in ${subj}: ${sub[subj].length}. List: ${sub[subj].join(', ')}`);
    }
  } catch(error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
