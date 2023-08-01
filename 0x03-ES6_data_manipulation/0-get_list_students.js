// Define the function
export default function getListStudents() {
  // Create an array to store students
  const students = [];

  // Add student objects to the array
  students.push({
    id: 1,
    firstName: "Guillaume",
    location: "San Francisco"
  });

  students.push({
    id: 2,
    firstName: "James",
    location: "Columbia"
  });

  students.push({
    id: 5,
    firstName: "Serena",
    location: "San Francisco"
  });

  // Return the array of students
  return students;
}
