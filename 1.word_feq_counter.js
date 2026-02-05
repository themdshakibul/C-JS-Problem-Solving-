// Statement: Count how many times each word appears in a sentence and return the result as an object.

// input: I love JS and I love coding and JS is fun Fun fUn

// Rules:
// Ignore case differences
// Ignore extra spaces

function wordFrequency(sentence) {
  let words = sentence.split(" ");
  let wordCount = {};

  for (let word of words) {
    let wordLowerCase = word.toLowerCase();
    // console.log(word);
    if (wordCount.hasOwnProperty(wordLowerCase)) {
      wordCount[wordLowerCase]++;
    } else {
      wordCount[wordLowerCase] = 1;
    }
  }
  return wordCount;
}

let output = wordFrequency("I love JS and I love coding and JS is fun Fun fUn");
console.log(output);


