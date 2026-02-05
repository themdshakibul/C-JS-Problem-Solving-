// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces
// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }
// Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }

function checkPassword(password) {
  let reasons = [];

  let length = password.length;

  let hasUppercase = false;
  let hasNumber = false;

  for (let i = 0; i < length; i++) {
    const charecter = password[i];
    // console.log(charecter);
    if (charecter >= "0" && charecter <= "9") {
      hasNumber = true;
    }
    if (charecter >= "A" && charecter <= "Z") {
      hasUppercase = true;
    }
  }
  console.log(password, length, hasUppercase, hasNumber);

  if (!hasNumber) {
    reasons.push("Missing Number");
  }
  if (!hasUppercase) {
    reasons.push("Missing UpperCase");
  }

  console.log(password.includes(" "))

  return {
    valid: true,
    reasons,
  };
}

let Output = checkPassword("helloWorld");
console.log(Output)
