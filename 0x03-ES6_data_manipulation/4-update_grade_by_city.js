export default function getStudentsByLocation(array, city, grad) {
  return array
    .filter((stud) => stud.location === city)
    .map((student) => {
      const gradeI = grad
        .filter((stud) => stud.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
