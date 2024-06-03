// file for controller
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((stud) => {
      const out = [];
      out.push('This is the list of our students');
      const k = Object.keys(stud);
      k.sort();
      for (let a = 0; a < k.length; a += 1) {
        out.push(`Number of students in ${k[a]}: ${stud[k[a]].length}. List: ${stud[k[a]].join(', ')}`);
      }
      response.status(200).send(out.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const f = request.params.major;
    readDatabase(process.argv[2].toString()).then((stud) => {
      if (!(f in stud)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${stud[f].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}
module.exports = StudentsController;
