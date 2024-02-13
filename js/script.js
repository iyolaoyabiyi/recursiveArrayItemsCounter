let testArray = ["array1","array2",["array3","array4","array5","array6",["array7","array8",["array9", "array10"]]],["array11", "array12"],"array13"];

function countAllArrayItems(array) {
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      count += countAllArrayItems(array[i]);
    } else {
      count++;
    }
  }
  return count;
}

let numberOfItems = countAllArrayItems(testArray);
console.log(`Total number of items: ${numberOfItems}`);