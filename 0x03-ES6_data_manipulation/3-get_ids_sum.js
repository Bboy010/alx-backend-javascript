// Import function getListStudents for getting the lists of students
import getListStudents from "./0-get_list_students.js";

// Definition of function getStudentIdsSum
export default function getStudentIdsSum(studentsList) {
  // Use function reduce to get the sum of students ids
  const idsSum = studentsList.reduce((sum, student) => sum + student.id, 0);

  // Return the sum of students ids
  return idsSum;
}
