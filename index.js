function isPalindrome(word) {
  const arrOfChar = word.split('');
  const reversedArr = arrOfChar.reverse();
  const reversedString = reversedArr.join('');
  return (word === reversedString) ? true : false;
}

/* 
  1- Split the string to array of characters
  2- Iterate this array using the map() method
  3- Define an empty array inside the call back function of map()
  4- Push the original array character to the new array
  5- Join the new array to form a string
  6- Compare both strings
*/

/*
  First the code will split the string into array of characters, then use the reverse() method and store the result in 
  a new variable, then join the new variable to form the reversed string. Compare results.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
