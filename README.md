# Student Management System

## Part 1: Class and Object-Oriented Programming
มีการสร้าง Class ที่ชื่อว่า 'Student' โดยให้เก็บคุณสมบัติคือ 'name', 'age' และ 'grades' และมีการสร้าง Method 2 Method คือ addGrade() และ getAverageGrade() เพื่อจัดการคะแนนของนักเรียนและคำนวณค่าเฉลี่ยของคะแนน โดยมีการนับจำนวนนักเรียนผ่าน TotalStudents ในทุกๆครั้งที่มีการเพิ่มข้อมูลนักเรียนเข้าไป

## Part 2: Inheritance and Polymorphism
สร้าง GraduateStudent โดย Extend มาจาก Class Student ในข้อแรก และมีการเพิ่มคุณสมบัติใหม่คือ thesisTopic โดยเขียนทับ Method getAverageGrade() เพื่อเพิ่มคะแนนหากหัวข้อ thesisTopic นั้นเป็น 'Artificial Intelligence'

## Part 3: Type Annotations and Interfaces
มีการกำหนด Interface 'Teacher'  ที่มีคุณสมบัติคือ 'name'. 'subject', และ 'students' และได้สร้าง Method 'getTeacherInfo()' ที่รับ Object จาก Teacher และแสดงข้อมูลเป็น log ออกมา

## Part 4: Generics
สร้าง module 'Database<T>' ขึ้นมา โดยสามารถเก็บข้อมูลได้ทั้งนักเรียนและครู โดย Class นี้จะมี Method 'addEntry()' และ 'getEntries' เพิ่อจัดการรายการต่างๆ

## Part 5: Functions and Higher-Order Functions
เขียน higher-order function 'createGradeMultiplier(multiplier:number)' ที่จะคืนค่าการคูณคะแนนตามที่เรากำหนด และสร้างตัวแปร 'doubleGrade' เพื่อคูณคะแนนนักเรียนเป็น 2 เท่า โดยใช้ functionGradeMultiplier และกำหนดค่า multiplier เป็น 2

## Part 6: Asynchronous Programming
async ฟังก์ชัน 'fetchStudentData()' เพื่อ Simulate การดึงข้อมูลนักเรียนจาก API โดยใช้ 'async/await' รวมถึงมีาการจัดการข้อผิดพลาดที่จะเกิดขึ้นทั้งในกรณีที่สำเร็จและไม่สำเร็จ

## Part 7: Array Methods
ใน Part นี้มีการใช้ 'filter()', 'map()' และ 'reduce()' โดยจะมีการใช้งานดังนี้
- **filter()** : จะทำการกรองค่า students ที่เกรดเฉลี่ยสูงกว่า 70 ขึนไปและคืนค่าออกมา
- **map()** : จะทำการดึงชื่อของนักเรียนออกมาเป็น Array ใหม่
- **reduce()** : คำนวณจำนวนคะแนนทั้งหมดในนักเรียนแต่ละคน

## Part 8: Error Handling
implement 'parseStudentData(jsonData: String)' ขึ้นมาโดย fuinction นี้จะทำหน้าที่แปลง String JSON โดยใช้ 'try/catch' เพื่อจัดการข้อผิดพลาดระหว่างการแปลงและคืนค่าข้อผิดพลาดนั้น

## Part 9: Modules and Imports/Exports
สร้าง function 'calculateMediangrade(grades: number[])' ใน 'studentUtils.ts' เพื่อคำนวนค่า Median ของ Array คะแนนใน index.ts โดยมีการ Import เข้าไปใช้งานใน 'index.ts' เพื่อคำนวณค่า Median ของเกรดนักเรียน