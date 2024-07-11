#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.rgb(7, 185, 252).bold('\n\t\t  <<<=================================>>>\n\t'));
console.log(chalk.rgb(255, 113, 181).bold("\t\t** Welcome to hi01tech Currency Convertor **\n\t"));
console.log(chalk.rgb(7, 185, 252).bold('\t\t  <<<=================================>>>\n\t'));
// Define list of currencies and their exchange rates
let exchangeCurrency = {
    "USD": 1, // BASE CURRENCY
    "EURO": 0.9, //Euorpian currency
    "CAD": 1.3, // Canadian Dollar
    "PKR": 278.58, // Pakistani Rupee
    "INR": 83.3, // Indian Rupee
    "AED": 3.67, // Aeab Emarati Dollar
    "SAR": 3.75 // Saudi Arab Riyal
};
let answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from: ",
        choices: ["USD", "EURO", "CAD", "PKR", "INR", "AED", "SAR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into: ",
        choices: ["USD", "EURO", "CAD", "PKR", "INR", "AED", "SAR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter amount: ",
    }
]);
// Storing Prompt data in variables
let from_amount = exchangeCurrency[answer.from_currency];
let to_amount = exchangeCurrency[answer.to_currency];
let amount = answer.amount;
// Conversion Formula
let base_amount = amount / from_amount;
let converted_amount = to_amount * base_amount;
// Display conevrted amount
console.log(`Converted Amount: ${chalk.greenBright(converted_amount.toFixed(2))}`);
