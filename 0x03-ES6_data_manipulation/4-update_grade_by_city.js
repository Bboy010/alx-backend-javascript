// Import function getListStudents get the list of student
import getListStudents from "./0-get_list_students.js";

// Define function updateStudentGradeByCity
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  // Use filter to filtered students by city
  const studentsInCity = studentsList.filter((student) => student.location === city);

  // Use map to update students by city 
  const updatedStudents = studentsInCity.map((student) => {
  const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
  const updatedGrade = gradeObject ? gradeObject.grade : "N/A";
  return { ...student, grade: updatedGrade };
  });

  // Return array updated
  return updatedStudents;
}
