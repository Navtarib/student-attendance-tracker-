
// javascript
// Student Attendance Tracker

// Step 1: Ask the teacher to enter the number of students in the class
var numStudents = Number(prompt("Enter the number of students in the class:"));

// Array to store absent students
var absentStudents = [];

// Counters for present and absent students
var presentCount = 0;
var absentCount = 0;

// Step 2: Use a for loop to get attendance for each student
for (let i = 0; i < numStudents; i++) {
    // Get student name
    var studentName = prompt(`Enter the name of student ${i + 1}:`);
    
    // Get attendance status for the student (either "Present" or "Absent")
    var attendance = prompt(`Is ${studentName} present or absent? (Enter 'Present' or 'Absent'):`);
    
    // Step 3: Validate input
    if (attendance === "Present" || attendance === "Absent") {
        if (attendance === "Present") {
            presentCount++;
        } else {
            absentCount++;
            absentStudents.push(studentName); // Store absent student name in the array
        }
    } else {
        // Nested if for invalid input, prompt again for valid entry
        alert("Invalid input! Please enter 'Present' or 'Absent' only.");
        // i--; // Decrement i to repeat this iteration for the correct input
    }
}

// Step 4: Display the results
alert(`Total students present: ${presentCount}`);
if (absentCount > 0) {
    alert(`Absent students: ${absentStudents.join(", ")}`);
} else {
    alert("All students are present.");
}


