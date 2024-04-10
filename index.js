#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000;
let myPin = 2468;
let c = true;
while (c) {
    let answer = await inquirer.prompt([
        {
            message: "Enter your pin number :",
            type: "number",
            name: "pin",
        }
    ]);
    if (answer.pin == myPin) {
        console.log("Correct pin code.");
        let performAns = await inquirer.prompt([
            {
                message: " Please select action to perform:",
                type: "list",
                name: "action",
                choices: ["Withdraw", "Check balance", "Deposit", "Exit"]
            },
        ]);
        if (performAns.action === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    message: "Enter amount to withdraw :",
                    type: "number",
                    name: "amount"
                }
            ]);
            if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log("You recieved amount :" + amountAns.amount);
                console.log("Your remaning balance is: " + myBalance);
            }
            else {
                console.log("Your balance is not enough to recieve amount!");
            }
        }
        else if (performAns.action === "Check balance") {
            console.log("Your  current balance is :" + myBalance);
        }
        else if (performAns.action === "Deposit") {
            let amountAns2 = await inquirer.prompt([
                {
                    message: "Enter amount to deposit :",
                    type: "number",
                    name: "amount"
                }
            ]);
            myBalance += amountAns2.amount;
            console.log("Your new balance is :" + myBalance);
        }
        else if (performAns.action === "Exit") {
            c = false;
        }
    }
    else {
        console.log("Incorrect pin code!");
    }
    console.log();
}
