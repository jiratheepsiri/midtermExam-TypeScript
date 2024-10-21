import { calculateMedianGrade } from './studentUtils';

const studentGrades = [80, 95, 74, 92, 87];

const medianGrade = calculateMedianGrade(studentGrades);
console.log(`Median grade: ${medianGrade}`);