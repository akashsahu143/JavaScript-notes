// Function to determine the grade based on marks
function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return "A";
    } else if (marks >= 70 && marks < 80) {
        return "B";
    } else if (marks >= 60 && marks < 70) {
        return "C";
    } else if (marks >= 50 && marks < 60) {
        return "D";
    } else if (marks >= 0 && marks < 50) {
        return "F";
    } else {
        return "Invalid marks entered.";
    }
}

// Prompt user to enter marks percentage
let marks = parseFloat(prompt("Enter the marks percentage of the student (0-100):"));

// Get the grade based on the entered marks
let grade = getGrade(marks);

// Display the result
console.log("The grade is: " + grade);