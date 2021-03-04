import react from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import emojipedia from "./emojipedia";

ReactDOM.render(
  <h1>Example of Ananymous Functions</h1>,
  document.getElementById("root")
);

var numbers = [2, 3, 5, 19, 10];

//Map using ananymous function
const newNumbers = numbers.map((num) => num * num);
console.log(newNumbers);

const newNumber = numbers.map((num) => num * 2);
console.log(newNumber);

//using foreach
const newNum = [];
numbers.forEach((num) => newNum.push(num * 3));
console.log(newNum);

//filter using ananymous function
const newValue = numbers.filter((num) => num > 5);
console.log(newValue);

//reduce
var newData = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newData);

//find
const newNumValue = numbers.find((num) => num > 5);
console.log(newNumValue);

//findIndex
const newValueData = numbers.findIndex((num) => num < 5);
console.log(newValueData);

const newEmojipedia = emojipedia.map((emojiData) =>
  emojiData.description.substring(0, 100)
);
console.log(newEmojipedia);
