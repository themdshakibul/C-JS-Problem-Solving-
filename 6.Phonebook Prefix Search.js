//! Problem 6: Phonebook Prefix Search

// Function name: searchByPrefix(phonebook, prefix)
// Statement: Return an array of names that start with the given prefix.
// Test case 1

// Input:
// phonebook = { rahim: "0181" prefix = "ra"; , karim: "0172" , rafi: "0193" };
// Output: ["rahim", "rafi"]

// Test case 2

// Input:
// phonebook = { mina: "013" prefix = "mi"; , mim: "014" , rina: "015" };
// Output: ["mina","mim"]

//! Ans:

function searchByPrefix(phonebook, prefix) {
  let result = [];
  for (let name in phonebook) {
    if (name.startsWith(prefix)) {
      result.push(name);
    }
  }
  return result;
}

let phonebook1 = { rahim: "0181", prefix: "ra", karim: "0172", rafi: "0193" };
let prefix1 = "ra";
let output1 = searchByPrefix(phonebook1, prefix1);

let phonebook2 = { mina: "013", prefix: "mi", mim: "014", rina: "015" };
let prefix2 = "mi";
let output2 = searchByPrefix(phonebook2, prefix2);

console.log(output1);
console.log(output2);
