// Function to get the day of the week based on user input
function getDayOfWeek() {
    // Prompt the user for input
    let userInput = prompt("Enter a number between 1 and 7 to get the corresponding day of the week:");

    // Convert the input to a number
    let dayNumber = parseInt(userInput);

    // Variable to hold the day of the week
    let day;

    // Use switch case to determine the day of the week
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid input! Please enter a number between 1 and 7.";
    }

    // Output the result
    alert(day);
}

// Call the function
getDayOfWeek();