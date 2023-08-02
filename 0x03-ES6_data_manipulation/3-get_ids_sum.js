// Definition of function getStudentIdsSum
export default function getStudentIdsSum(studentsList) {
  // Use function reduce to get the sum of students ids
return studentsList.reduce((sum, student) => sum + student.id, 0);
}
