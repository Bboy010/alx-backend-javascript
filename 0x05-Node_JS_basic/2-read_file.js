/**
 * Reading a file synchronously with Node JS
 * Using the database database.csv
 * create a function countStudents in the file
 * author -> Hongo help by ChatGPT
 * */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    let count = 0;
    const fields = {};
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i]) {
        count += 1;
        const student = lines[i].split(',');
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
