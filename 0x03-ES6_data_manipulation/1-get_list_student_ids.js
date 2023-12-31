// Define function getListStudentIds
export default function getListStudentIds(arr) {
  // Check if argument is an array
  if (!Array.isArray(arr)) {
    return [];
  }

  // Use map function to get id from student array
return arr.map((student) => student.id);
}
