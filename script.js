
const createSubject = (subjectCode, subjectName, semester) => {
  return {
    subjectCode: subjectCode,       
    subjectName: subjectName,       
    semester: semester              
  };
};


const subjectsSemesterI = [
  createSubject("CH 101", "Chemistry", 1),
  createSubject("MA 101", "Mathematics", 1),
  createSubject("CS 101", "Introduction to Programming", 1),
  createSubject("EC 101", "Basic Electronics", 1),
  createSubject("CE 102", "Environmental Science & Engineering", 1),
  createSubject("CH 111", "Chemistry Laboratory", 1),
  createSubject("CS 111", "Programming Laboratory", 1),
  createSubject("EC 111", "Basic Electronics Laboratory", 1),
  createSubject("ME 111", "Workshop Practice", 1)
];


const subjectsSemesterII = [
  createSubject("PH 101", "Physics", 2),
  createSubject("MA 102", "Mathematics II", 2),
  createSubject("ME 101", "Engineering Mechanics", 2),
  createSubject("EE 101", "Basic Electrical Engineering", 2),
  createSubject("HS 101", "Communicative English", 2),
  createSubject("CE 101", "Engineering Graphics & Design", 2),
  createSubject("PH 111", "Physics Laboratory", 2),
  createSubject("EE 111", "Basic Electrical Engineering Laboratory", 2),
  createSubject("HS 111", "Language Laboratory", 2)
];


const subjectsSemesterIII = [
  createSubject("EE 201", "Signals and Systems", 3),
  createSubject("MA 201", "Mathematics III", 3),
  createSubject("EE 202", "Analog Electronics", 3),
  createSubject("EE 203", "Energy Science and Technology", 3),
  createSubject("EE 204", "Measuring Instruments and Measurements", 3),
  createSubject("EE 205", "Electromagnetic Field Theory", 3),
  createSubject("EE 211", "Programming and Simulation Laboratory", 3),
  createSubject("EE 212", "Measurement Laboratory", 3),
  createSubject("EC 226", "Analog Electronics Laboratory", 3)
];

const subjectsSemesterV = [
  createSubject("EE 301", "Control Systems", 5),
  createSubject("EE 302", "Power Systems II", 5),
  createSubject("EE 303", "Electrical Machines II", 5),
  createSubject("EE 304", "Power Electronics", 5),
  createSubject("EE 305", "Digital Signal Processing", 5),
  createSubject("EE 311", "Electrical Machine Laboratory-I", 5),
  createSubject("EE 312", "Power System Laboratory-I", 5),
  createSubject("EE 313", "Control System Laboratory", 5),
  createSubject("EE 314", "Signal Processing Laboratory", 5)
];

console.log(subjectsSemesterI);
console.log(subjectsSemesterII);
console.log(subjectsSemesterIII);
console.log(subjectsSemesterV);
