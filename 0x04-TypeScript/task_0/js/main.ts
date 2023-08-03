// Student interface
interface Student {
	firstName: string;
	lastname: string;
	age: number;
	location: string;
}
// Create two students and an array named  studentList containing these students
const studentsList: Student[];
  return [
	{firstName: "Alfred", lastName: "Tuva", age: 18, location: "kenya",};
	{firstName: "agent", lastName: "double", age: 45, location: "kigali",};

  ]
// Function to create and render the table
function renderTable() {
	const table = document.createElement("table");
	const headerRow = document.createElement("tr");
	const headerFirstName = document.createElement("th");
	const headerLocation = document.createElement("th");

	headerFirstName.textContent = "First Name";
	headerLocation.textContent = "Location";

	headerRow.appendChild(headerFirstName);
	headerRow.appendChild(headerLocation);
	table.appendChild(headerRow);

	studentsList.forEach((student) => {
		const row = document.createElement("tr");
		const firstNameCell = document.createElement("td");
		const locationCell = document.createElement("td");

		firstNameCell.textContent = student.firstName;
		locationCell.textContent = student.location;

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);
		table.appendChill(row);
	});

	document.body.appendChild(table);
}
	renderTable();

