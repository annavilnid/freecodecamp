/* This is a
multi-line comment */
// This is an in-line comment
//

var myName;

// Setup
var a;
a = 7;
// Only change code below this line

// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line

var a = 9;

var myFirstName = "Anna";
var myLastName = "Vilnid";

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

let myVar = 87;
// Only change code below this line
myVar = ++myVar;

let myVar = 11;
// Only change code below this line
myVar = --myVar;
const ourDecimal = 5.7;
// Only change code below this line
const myDecimal = 5.7;

const product = 2.0 * 2.5;

const quotient = 4.4 / 2.0; // Change this line

const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;
// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const myStr = "This is the start. " + "This is the end"; // Change this line

let myStr = "This is the first sentence." ;
myStr += "This is the second sentence.";

// Only change code below this line
const myName = "Anna";
const myStr = "My name is " + myName + " and I am well!";

const someAdjective = "love";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "A " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ["bread", 1];

// Only change code below this line
const myArray = [["White Sox", 45]];
const myArray = [50, 60, 70];
let myData = myArray[0];

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45
// Only change code below this line

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

  // Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line

// Setup
const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop()
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift()
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line

const myList = [["Chocolate Bar", 15], ["Tomato", 25], ["Meat", 2], ["Milk", 3], ["Bread", 1]];

function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction()

  function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
  }
  functionWithArgs(3,4)

  function timesFive(num) {
    return num * 5;
  }
  timesFive(2)


  // Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
 oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
    // Only change code below this line
    let myVar
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  // Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();

// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7); 

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    item = arr.shift()
    return item;
    // Only change code above this line
  }
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true"
  }
    return "No, that was false"
    // Only change code above this line
  }

  // Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// Setup
function testNotEqual(val) {
  if (val !=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55 ) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

function testLogicalAnd(val) {
  // Only change code below this line
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
testLogicalOr(15);

function testElse(val) {
  let result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
testElse(4);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}
testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"
} else if (num >= 20) {
  return "Huge"
}
  // Only change code above this line
}
testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return "Hole-in-one!"
} else if (strokes - par <= -2) {
  return "Eagle"
} else if (strokes - par == -1) {
  return "Birdie"
} else if (strokes == par) {
  return "Par"
} else if (strokes - par == 1) {
  return "Bogey"
} else if (strokes - par == 2) {
  return "Double Bogey"
}
  return "Go Home!";
  // Only change code above this line
}
golfScore(5, 4);

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
  case 1:
   answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  // Only change code above this line
  return answer;
}
caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}
  // Only change code above this line
  return answer;
}
switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
  // Only change code above this line
  return answer;
}
sequentialSizes(1);