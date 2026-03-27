/* Assignment 1 Date : */
let SureshMass = 70;
let SureshHeight = 1.75;

let RameshMass = 80;
let RameshHeight = 1.80;

let SureshBMI = SureshMass / (SureshHeight ** 2) 
let RameshBMI = RameshMass / (RameshHeight ** 2);
console.log(SureshBMI, RameshBMI);

let markHigherBMI = SureshBMI > RameshBMI;
console.log("Does Suresh have a higher BMI than Ramesh? " + markHigherBMI);

// ===================================================
// Assignment 1: Smart Discount Calculator
// ===================================================
function smartDiscountCalculator(userName, age, purchaseAmount) {
  let discount = 0;
  if (age < 18) {
    discount += 10;
  } else if (age >= 60) {
    discount += 20;
  }
  if (purchaseAmount > 5000) {
    discount += 5;
  }

  let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);

  console.log(`Hi ${userName}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);
}

smartDiscountCalculator("Suresh",17,3000)

// ===================================================
// Assignment 2: Login Validation System
// ===================================================



function loginValidationSystem(inputUsername, inputPassword) {
  let storedUsername = "admin";
  let storedPassword = "12345";

  if (inputUsername === storedUsername && inputPassword === storedPassword) {
    console.log("Login successful!");
  } else if (inputUsername !== storedUsername && inputPassword !== storedPassword) {
    console.log("Both incorrect");
  } else if (inputUsername !== storedUsername) {
    console.log("Incorrect username");
  } else {
    console.log("Incorrect password");
  }
}

loginValidationSystem("admin","12345");


// ==============================
// Assignment 3: Number Analyzer Tool
// ==============================

function numAnlyzerTool(number ){
let sign = ""
let type = ""
if (number > 0) {
  sign = "positive";
} else if (number < 0) {
  sign = "negative";
} else {
  sign = "zero";
}

if (number % 2 === 0) {
  type = "even";
} else {
  type = "odd";
}

console.log(`The number ${number} is ${sign} and ${type}.`);
}

numAnlyzerTool(3);

// ==============================
// Assignment 4: Shopping Eligibility Checker
// ==============================
function shoppingEligibility(isMember,cartValue){
  
  if ((isMember && cartValue > 1000) || cartValue > 2000) {
    console.log("You are eligible for free delivery!");
  } else {
    console.log("You are not eligible for free delivery.");
  }
}

// ==============================
// Assignment 5: Grade Evaluation System
// ==============================

function markSheetCalculator(marks){
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks entered.");
  } else if (marks >= 90) {
    console.log("Your grade is A.");
  } else if (marks >= 75) {
    console.log("Your grade is B.");
  } else if (marks >= 50) {
    console.log("Your grade is C.");
  } else {
    console.log("Fail");
  }

}

markSheetCalculator(92)





