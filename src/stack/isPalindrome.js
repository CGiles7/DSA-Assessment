const Stack = require("../stack/stack");

function isPalindrome(text) {
  // Check if the input text is blank or contains only a single letter
  if (!text || text.length === 1) {
    // Check if it's a single capitalized letter
    if (/^[A-Z]$/.test(text)) {
      return true;
    }
    return false;
  }

  // Clean the text by removing non-letter and non-digit characters
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // Check if the cleaned text is empty (e.g., if it contained only emojis or symbols)
  if (!cleanText) {
    return false;
  }

  let stack = new Stack();

  for (let i = 0; i < cleanText.length; i++) {
    stack.push(cleanText[i]);
  }

  let reversedText = "";
  for (let i = 0; i < cleanText.length; i++) {
    reversedText += stack.pop();
  }

  // Use a function to compare without considering spaces and special characters
  const compareText = (str) => str.replace(/[^a-zA-Z0-9]/g, "");

  return compareText(cleanText) === compareText(reversedText);
}

module.exports = isPalindrome;