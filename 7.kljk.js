// Problem 7: Text Stats Generator

// Function name: textStats(text)
// Statement: Return an object containing:
//
// 1. Characters count excluding spaces
// 2. Words count
// 3. Vowels count
// 4. Consonants count

// Test case 1
// Input: "JavaScript is fun to learn"
// Output: { characters: 22, words: 5, vowels: 8, consonants: 14 }

// Test case 2
// Input: " I am OK "
// Output:{ characters: 5, words: 3, vowels: 3, consonants: 2

//! Ans:

function textStats(text) {

  let vowelSet = "aeoiuAEIOU";

  let trimmedText = text.trim();

  let words;
  if (trimmedText.length === 0) {
    words = 0;
  } else {
    let wordArray = trimmedText.split(/\s+/);
    words = wordArray.length;
  }
  
  //   let words = trimmedText.length === 0 ? 0 : trimmedText.split(/\s+/).length;

  let characters = 0;
  let vowels = 0;
  let consonants = 0;

  for (let char of trimmedText) {
    if (char != " ") {
      characters++;

      if (/[a-zA-Z]/.test(char)) {
        if (vowelSet.includes(char)) {
          vowels++;
        } else {
          consonants++;
        }
      }
    }
  }
  return {
    characters: characters,
    words: words,
    vowels: vowels,
    consonants: consonants,
  };
}

let output1 = textStats("JavaScript is fun to learn");
let output2 = textStats(" I am OK ");

console.log(output1);
console.log(output2);
