//! Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

function analyzeMarks(marksObj) {
  let total = 0;

  let heighesMark = -Infinity;
  let lowestMark = Infinity;

  let heighesSubject = null;
  let lowestSubject = null;

  for (let subject in marksObj) {
    let mark = marksObj[subject];
    total += mark;

    if (mark > heighesMark) {
      heighesMark = mark;
      heighesSubject = subject;
    }
    if (mark < lowestMark) {
      lowestMark = mark;
      lowestSubject = subject;
    }
  }

  console.log("Heighes Mark --> ", heighesMark);
  console.log("Lowest Mark --> ", lowestMark);

  console.log("Heighes Subject -->", heighesMark);
  console.log("Lowest Subject --> ", lowestSubject);

  let average = total / Object.keys(marksObj).length;

  return {
    total,
    average,
    heighesSubject,
    lowestSubject,
  };
}

let Output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(Output);
