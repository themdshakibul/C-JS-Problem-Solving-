function blenderMachen(fruti) {
  // your logic
  console.log("I recived", fruti, "to make " + fruti + " justic");
}

// blenderMachen("orange");

let num1 = 50;
let num2 = 100;

function checkEvenSumDotheSumthing(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  if (sum % 2 == 0) {
    console.log("Yes this is even number ");
    console.log("I do Sumthing");
  } else {
    console.log("No this is odd number");
    console.log("I do Sumthing");
  }
}

// checkEvenSumDotheSumthing(num1, num2);

// checkEvenSumDotheSumthing(100, 150);
// checkEvenSumDotheSumthing(5, 30);
// checkEvenSumDotheSumthing(5, 5);

function withoutPerameter() {
  console.log("I am function without Perameter");
}

// withoutPerameter();

function sumTwoNumberAndMultiplay(num1, num2) {
  let sum = num1 + num2;
  let result = sum * 5;
  // bilt in function input resive an output provide
  // console.log(result);
  // return result;
  if (result % 2 === 0) {
    return result;
  } else {
    return "Sorry! This output is not a even number. please try again.";
  }
}

// let result = sumTwoNumberAndMultiplay(2, 2);
// let result1 = sumTwoNumberAndMultiplay(10, 5);
// let result2 = sumTwoNumberAndMultiplay(10, 6);
// console.log(result, result1, result2);

// param arr and object

function sumArray(arr) {
  console.log(arr);
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

// let sumOfArray = sumArray([10, 20, 30, 40, 50, 60, 44, 66]);
// console.log(sumOfArray);

function countOnjectProperty(obj) {
  console.log(obj);
  let count = Object.keys(obj).length;
  console.log(count);
}

let person = {
  name: "Shakibul",
  age: 19,
  roll: 84,
  location: "Manikgonj Dhaka",
};
countOnjectProperty(person);