#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
// conditional statement
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondnumber);
} else {
  console.log("please select valid operator ");
}
