var justVar = "Oh, don't you worry about it, I'm GLOBAL"; // Global variable

function whereAreYou() {
  var justVar = "Just an every day LOCAL"; // Local variable

  function inner() {
    return justVar;
  }
  return inner;
}

var innerFunction = whereAreYou(); // Assign the return value of the function to a variable
var result = innerFunction(); // Call the inner function
// var result = whereAreYou(); // Assign the return value of the function to a variable
console.log(result); // Logs "Just an every day LOCAL"
console.log(justVar); // Logs "Oh, don't you worry about it, I'm GLOBAL"

// a closure
function makeCounter() {
  var count = 0;
  function counter() {
    count = count + 1;
    return count;
  }
  return counter;
}
var doCount = makeCounter();
console.log(doCount()); // 1
console.log(doCount()); // 2
console.log(doCount()); // 3

// closure tasks
function makePassword(password) {
  return function guess(passwordGuess) {
    return passwordGuess === password;
  };
}

function multN(n) {
  return function multBy(m) {
    return n * m;
  };
}
