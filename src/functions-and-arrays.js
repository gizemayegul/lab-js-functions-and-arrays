// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a;
  }
}
//**Another solution */
// ES6 & ternary conditional
// const maxOfTwoNumbers = (a, b) => (a > b ? a : b);

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(findWord) {
  let longestWord = "";
  if (!findWord.length) {
    return null;
  }
  for (let i = 0; i <= findWord.length - 1; i++) {
    if (findWord[i].length > longestWord.length) {
      longestWord = findWord[i];
    }
  }
  return longestWord;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(newArr) {
  if (!newArr.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i <= newArr.length - 1; i++) {
    sum += newArr[i];
  }
  return sum;
}
sumNumbers(numbers);
// Iteration 4 | Numbers Average
// const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
const numbers2 = [];

function averageNumbers(numberArr) {
  if (!numberArr.length) {
    return 0;
  }

  return sumNumbers(numberArr) / numberArr.length;
}
averageNumbers(numbers2);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsArr, word) {
  if (wordsArr.length === 0) {
    return null;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }
  }

  return false;
}

// function doesWordExist(wordArr, existWord) {
//   if (!wordArr.length) {
//     return null;
//   }
//   return wordArr.includes(existWord);
// }
