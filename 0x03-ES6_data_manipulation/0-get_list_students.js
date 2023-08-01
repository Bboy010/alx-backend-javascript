// Define function

export default function getListStudents() {
  // Create empty array to keep students
  const students = [];

  // Add objects students to array
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

  // return array of students
  return students;
}
