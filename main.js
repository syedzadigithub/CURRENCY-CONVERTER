import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n Welcome to 'SyedaHuma' - Currancy Convertor\n "));
// Define the list of currencies and thier exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
};
// Promt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.red("select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.red("select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green("Enter the amount to convert:"),
    },
]);
// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(` Converted Amount = ${chalk.yellow(converted_amount.toFixed(2))}`);
