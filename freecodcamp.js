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

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break; 
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}
chainToSwitch(7);

function isLess(a, b) {
  // Only change code below this line
    return a < b;
  // Only change code above this line
}
isLess(10, 15);

// Setup
function abTest(a, b) {
  // Only change code below this line
if ( a<0 || b<0) {
  return
}
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

let count = 0;
function cc(card) {
  // Only change code below this line
if (card === 2 || card === 3 || card ===4 || card  === 5 || card === 6)  {
  count += 1;
} else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
  count -= 1;
} 
if (count > 0) {
  return  count + " Bet"
} else {
return count + " Hold"
}
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

const myDog = {
  // Only change code below this line
  "name": "Max",
  "legs": 4,
  "tails": 1,
  "friends": ["ball", "bird"]
  // Only change code above this line
};

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
myDog.name = "Happy Coder";

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
// Only change code below this line
delete myDog.tails

// Setup
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line
 const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result=lookup[val]
  // Only change code above this line
  return result;
}
phoneticLookup("charlie");

function checkObj(obj, checkProp) {
  // Only change code below this line
  return obj.hasOwnProperty(checkProp)? obj[checkProp] : "Not Found"
  // Only change code above this line
}

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
myMusic.push({
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
   "CD", 
   "Cassette", 
   "LP"
  ],
  "gold": true})

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  const gloveBoxContents = myStorage.car.inside["glove box"];

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
if (!value) {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Setup
const myArray = [];
// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i <=9; i += 2) {
  myArray.push(i);
}

// Setup
const myArray = [];
// Only change code below this line
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

// Setup
const myArr = [2, 3, 4, 5, 6];
// Only change code below this line
let total = 0
for (let i = 0; i < myArr.length; i++) {
   total=total+(myArr[i]);
}

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product*=(arr[i][j]);
  }
}
  // Only change code above this line
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Setup
const myArray = [];
let i = 10;
// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i === 10);

function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  const profile = contacts.find((contact) => contact.firstName === name)
  if (!profile) return "No such contact"

  const property = profile[prop]
  if (!property) return "No such property"

  return property
  // Only change code above this line
}
lookUpProfile("Akira", "likes");

function randomFraction() {
  // Only change code below this line 
  return Math.random();
  // Only change code above this line
}

function randomWholeNum() {
  // Only change code below this line
  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

function convertToInteger(str) {
  return parseInt(str);
 }
convertToInteger("56");


function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
  }
checkEqual(1, 2);

function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
  }
 checkSign(10);

 // Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return ([]);
  } else {
   const countArray = rangeOfNumbers(startNum, endNum-1);
   countArray.push(endNum);
   return countArray;
 }
};

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2; 
s[1] = 5;
s[2] = 7; 
  // Only change code above this line
}
editInPlace();

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
 Object.freeze(MATH_CONSTANTS)
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const myConcat = (arr1, arr2) => [...arr1, ...arr2];
console.log(myConcat([1, 2], [3, 4, 5]));

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const {today: highToday, tomorrow: highTomorrow} =
HIGH_TEMPERATURES; 
// Only change code above this line

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const {today: {low: lowToday, high:highToday}} = LOCAL_FORECAST
// Only change code above this line

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// Only change code below this line
const half = ({min, max}) => (max + min) / 2.0; 
// Only change code above this line

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let element of arr) {
    failureItems.push (
    `<li class="text-warning">${element}</li>`
  )
  }
  // Only change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);