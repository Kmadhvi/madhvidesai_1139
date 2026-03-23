/* Assignment 1  */
let SureshMass = 70;
let SureshHeight = 1.75;

let RameshMass = 80;
let RameshHeight = 1.80;

let SureshBMI = SureshMass / (SureshHeight ** 2) 
let RameshBMI = RameshMass / (RameshHeight ** 2);
console.log(SureshBMI, RameshBMI);

let markHigherBMI = SureshBMI > RameshBMI;
console.log("Does Suresh have a higher BMI than Ramesh? " + markHigherBMI);

// ==============================
// Assignment 1: Smart Discount Calculator
// ==============================
let userName = "Suresh";
let age = 17;
let purchaseAmount = 6000;
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

// ==============================
// Assignment 2: Login Validation System
// ==============================
let storedUsername = "admin";
let storedPassword = "12345";
let inputUsername = "admin";
let inputPassword = "12345";

if (inputUsername === storedUsername && inputPassword === storedPassword) {
  console.log("Login successful!");
} else if (inputUsername !== storedUsername && inputPassword !== storedPassword) {
  console.log("Both incorrect");
} else if (inputUsername !== storedUsername) {
  console.log("Incorrect username");
} else {
  console.log("Incorrect password");
}

// ==============================
// Assignment 3: Number Analyzer Tool
// ==============================
let number = -4;
let sign = "";
let type = "";

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

// ==============================
// Assignment 4: Shopping Eligibility Checker
// ==============================
let isMember = true;
let cartValue = 1500;

if ((isMember && cartValue > 1000) || cartValue > 2000) {
  console.log("You are eligible for free delivery!");
} else {
  console.log("You are not eligible for free delivery.");
}

// ==============================
// Assignment 5: Grade Evaluation System
// ==============================
let marks = 78;

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





