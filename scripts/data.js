const subjects = [
  new Subject(1, "Java"),
  new Subject(2, "C#"),
  new Subject(3, "JavaScript"),
];

const classrooms = [
  new Classroom(1, 10),
  new Classroom(2, 22),
  new Classroom(3, 33),
  new Classroom(4, 44),

];

const lecturers = [
  new Lecturer("Gago", 1),
  new Lecturer("Vaxo", 1),
  new Lecturer("Sanasar", 2),
  new Lecturer("Baghdasar", 3),
];

const students = [
  new Student("S1"),
  new Student("S2"),
  new Student("S3"),
  new Student("S4"),
  new Student("S5"),
];

const lessons = [
  new Lesson("Java 1", 1, [students[0], students[1], students[4]]),
  new Lesson("C3 1", 2, [students[1], students[3], students[4]]),
];

const timetable = [];

function calculate() {}

const html = getElementById();

for (student in students) {
  html.innerHTML += `<div class="students">${student.name}</div>`;
}
