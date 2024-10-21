// Part1
class Student{
    name : string;
    age : number;
    grades : number[];

    private static StudentsCount: number = 0 ;

    constructor(name:string,age: number){
        this.name = name;
        this.age = age;
        this.grades = [];

        Student.StudentsCount++;
    }

    addGrade(grade: number): void{
        this.grades.push(grade)
    }

    getAverageGrade():number {
        const totalgrade = this.grades.reduce((sum, grade) => sum + grade, 0);
        return this.grades.length ? totalgrade / this.grades.length : 0;
    }

    static totalStudents(): number {
        return Student.StudentsCount;
    }
}
// Part2
class GraduateStudent extends Student {
    thesisTopic : string;

    constructor(name : string, age : number, thesisTopic: string){
        super(name,age);
        this.thesisTopic = thesisTopic;
    }

    getAverageGrade(): number {
        let average = super.getAverageGrade();

        if (this.thesisTopic.toLowerCase() === 'artificial intelligence') {
            average += 5;
        }

        return average;
    }
}
// Part3
interface Teacher{
    name : string;
    subject : string;
    students : Student[];
}

function getTeacherInfo(teacher: Teacher): void {
    console.log(`Teacher Name: ${teacher.name}`);
    console.log(`Subject: ${teacher.subject}`);
    console.log(`Number of Students: ${teacher.students.length}`);
}
// Part4
class Database<T>{
    private entries : T[] = [];

    addEntry(entry: T): void{
        this.entries.push(entry);
    }

    getEntries(): T[]{
        return this.entries;
    }
}
// Part5
function createGradeMultiplier(multiplier: number){
    return function(grade:number): number{
        return grade * multiplier;
    };
}

const doubleGrade = createGradeMultiplier(2);
function applyGradeMultiplier(students: Student[], multiplierFunction: (grade: number) => number): void {
    students.forEach(student => {
        student.grades = student.grades.map(multiplierFunction);
    });
}

// Part6
async function fetchStudentData(): Promise<{ name: string; grades: number[] }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ name: "Jiratheep", grades: [85, 90, 78] });
            } else {
                reject(new Error("Failed to fetch student data."));
            }
        }, 1000);
    });
}

async function getStudentInfo() {
    try {
        const studentData = await fetchStudentData();
        console.log(`Student Name: ${studentData.name}`);
        console.log(`Grades: ${studentData.grades}`);
    } catch (error) {
        console.error(error.message);
    }
}

getStudentInfo();
// Part7
const students: Student[] = [
    new Student("Mix", 20),
    new Student("Fee", 22),
    new Student("Guy", 21),
];


students[0].addGrade(30);
students[0].addGrade(40);
students[1].addGrade(65);
students[1].addGrade(75);
students[2].addGrade(70);
students[2].addGrade(85);


const above70Students = students.filter(student => student.getAverageGrade() > 70);
console.log("Students with average grade above 70:", above70Students.map(s => s.name));


const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);


const totalGradesCount = students.reduce((total, student) => total + student.grades.length, 0);
console.log("Total number of grades across all students:", totalGradesCount);
// Part8
function parseStudentData(jsonData: string): any {
    try {
        const parsedData = JSON.parse(jsonData);
        return parsedData; 
    } 
    catch (error) {
        return `Error parsing student data: ${error.message}`; 
    }
}