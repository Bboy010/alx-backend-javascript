export default function getListStudentIds(studentsList) {
return studentsList.reduce((sum, student) => sum + student.id, 0);
}
