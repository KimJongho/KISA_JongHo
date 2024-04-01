// Import the calculateMD5 function from md5.js
const { calculateMD5 } = require('./md5');

// Function to take user input and calculate the MD5 hash
function calculateUserInput() {
  const userInput = prompt('Enter a string:');
  const md5Hash = calculateMD5(userInput);
  console.log(`MD5 hash of "${userInput}": ${md5Hash}`);
}

// Call the calculateUserInput function to start the MD5 calculator
calculateUserInput();