#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(" Welcome to Number Guessing Game");
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-20",
    },]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a correct number.");
}
else if (answers.userGuessedNumber < randomNumber) {
    console.log("Too low! Try guessing a higher number.");
}
else {
    console.log("Too high! Try guessing a lower number.");
}
