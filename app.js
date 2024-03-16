// character 12 to 13

var input = prompt("Enter a character (number or string):");
var charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    console.log("Input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    console.log("Input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    console.log("Input is a lowercase letter.");
} else {
    console.log("Input is not a number or a letter.");
}


var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if (num1 < num2) {
    console.log(num2 + " is larger than " + num1);
} else {
    console.log("Both integers are equal.");
}
var num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

var character = prompt("Enter a character:");
if (character.length === 1 && isVowel(character)) {
    console.log("The character is a vowel.");
} else {
    console.log("The character is not a vowel.");
}
var correctPassword = "password123";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
var time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    console.log("Good morning.");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon.");
} else if (time >= 1700 && time < 2200) {
    console.log("Good evening.");
} else if (time >= 2200 && time <= 2359) {
    console.log("Good night.");
} else {
    console.log("Invalid time format.");
}


// character 14 to 16


function checkInputType(input) {
    if (!isNaN(input)) {
        console.log("Input is a number.");
    } else if (input === input.toUpperCase() && input >= 'A' && input <= 'Z') {
        console.log("Input is an uppercase letter.");
    } else if (input === input.toLowerCase() && input >= 'a' && input <= 'z') {
        console.log("Input is a lowercase letter.");
    } else {
        console.log("Input is neither a number nor a letter.");
    }
}

// Example usage:

checkInputType('A');
checkInputType('a'); 
checkInputType('7'); 
checkInputType('@'); 

function compareIntegers(a, b) {
    if (a > b) {
        console.log(a + " is larger.");
    } else if (b > a) {
        console.log(b + " is larger.");
    } else {
        console.log("Both integers are equal.");
    }
}

// Example usage:

compareIntegers(5, 10);
compareIntegers(20, 5); 
compareIntegers(8, 8); 
function checkNumberSign(num) {
    if (num > 0) {
        console.log("Positive number.");
    } else if (num < 0) {
        console.log("Negative number.");
    } else {
        console.log("Zero.");
    }
}

// Example usage:
checkNumberSign(5); 
checkNumberSign(-3);
checkNumberSign(0); 
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Example usage:

console.log(isVowel('a')); 
console.log(isVowel('b')); 
var correctPassword = "password123";

function validatePassword(userInput) {
    if (!userInput) {
        console.log("Please enter your password.");
    } else if (userInput === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }
}

// Example usage:

validatePassword(""); 
validatePassword("password123"); 
validatePassword("password"); 

var studentNamesLiteral = [];
var studentNamesObject = new Array();
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["apple", 3, true];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Education Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");
var studentNames = ["Alice", "Bob", "Charlie"];
var scores = [400, 450, 480];
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / 500) * 100;
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}

var colors = ["Red", "Green", "Blue"];
document.write("<b>Colors:</b> " + colors.join(", ") + "<br>");
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("<b>After adding at the beginning:</b> " + colors.join(", ") + "<br>");
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("<b>After adding at the end:</b> " + colors.join(", ") + "<br>");
colors.unshift("Yellow", "Orange");
document.write("<b>After adding two more colors at the beginning:</b> " + colors.join(", ") + "<br>");
colors.shift();
document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");
colors.pop();
document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");
var indexToAdd = prompt("Enter the index where you want to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<b>After adding at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");
var indexToDelete = prompt("Enter the index from where you want to delete:");
var deleteCount = prompt("Enter how many colors to delete:");
colors.splice(indexToDelete, deleteCount);
document.write("<b>After deleting " + deleteCount + " colors from index " + indexToDelete + ":</b> " + colors.join(", "));
var studentScores = [85, 72, 93, 64, 78];
document.write("<b>Student Scores before sorting:</b> " + studentScores.join(", ") + "<br>");
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("<b>Student Scores after sorting:</b> " + studentScores.join(", "));
var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
var selectedCities = cities.slice(1, 4); // Copying elements at index 1, 2, and 3
document.write("<b>Selected Cities:</b> " + selectedCities.join(", "));
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString);

var fifoArray = [];

function addToFifo(value) {
    fifoArray.push(value);
}

function removeFromFifo() {
    if (fifoArray.length === 0) {
        return "Array is empty!";
    } else {
        return fifoArray.shift();
    }
}

// Example usage:

addToFifo(1);
addToFifo(2);
addToFifo(3);

console.log(removeFromFifo()); 
console.log(removeFromFifo()); 
console.log(removeFromFifo()); 
console.log(removeFromFifo()); 

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var dropdownHTML = "<select>";
for (var i = 0; i < phoneManufacturers.length; i++) {
    dropdownHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}
dropdownHTML += "</select>";
document.write(dropdownHTML);










