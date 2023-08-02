// Define function getStudentsByLocation
export default function getStudentsByLocation(array, city) {
  // Use filter function to filtered student by city
	return array.filter((student) => student.location === city);
}
