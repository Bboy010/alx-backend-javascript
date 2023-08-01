// Import function getListStudents to get the list of students
import getListStudents from "./0-get_list_students.js";

// Define function getStudentsByLocation
export default function getStudentsByLocation(studentsList, city) {
  // Use filter function to filtered student by city
  const studentsInCity = studentsList.filter((student) => student.location === city);

  // Return array of student by city specified
  return studentsInCity;
}
