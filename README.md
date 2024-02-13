# Recursive Array Item Counter

## Description
This is a simple JavaScript project aimed at learning how to count all the items in an array, including those within nested arrays. It provides a function `countAllArrayItems` that recursively traverses through the array and counts all the items. This project is ideal for beginners who want to understand recursion and array manipulation in JavaScript.

## Usage
1. Clone or download the project repository.
2. Open the `js` folder, then open the `script.js` file in your preferred code editor.
3. Modify the `testArray` variable to contain the array you want to count the items for.
4. Run the `countAllArrayItems` function with your array as an argument.
5. The function will return the total count of items in the array, including items in nested arrays.

### Example
```javascript
let testArray = ["array1", "array2", ["array3", "array4", "array5", "array6", ["array7", "array8", ["array9", "array10"]]], ["array11", "array12"], "array13"];

let numberOfItems = countAllArrayItems(testArray);
console.log(`Total number of items: ${numberOfItems}`); // Output: Total number of items: 13
