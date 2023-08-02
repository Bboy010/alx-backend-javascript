// Define function getStudentsByLocation
export default function getStudentsByLocation(studentsList, city) {
  // Use filter function to filtered student by city
return studentsList.filter((student) => student.location === city);
}
