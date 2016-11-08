/**
 *   @author Thrasher, Isaac ()
 *   @version 0.0.3
 *   @summary MidTermExam || created: 11.07.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let deposit, withDraw, transferFunds, cardNum, pinNum, choice, currentMoney;
let cardName;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setCardName();
        askCardNum();
       askPinNum();
        setInitialBalance();
        userChoice();


    }
   // printGoodBye();
}
main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;

    }
}

function setCardName() {
    cardName = PROMPT.question(`What is your name as shown on card? `);
    console.log(`\n Your name is ${cardName}. `);
}

function askCardNum() {
    const   MIN_NUM = 1,
        MAX_NUM = 9999;
    cardNum = PROMPT.question(`Please insert your card number: `);
    if (cardNum < MIN_NUM || cardNum > MAX_NUM) {
        console.log(`${cardNum} is an incorrect value. Please try again.`);
        askCardNum();
    }
    console.log(`\n Your card number is ${cardNum}!`);
}

function askPinNum() {
    const PIN_NUM = 2012,
        MAX_RETIRES = 3;
    pinNum = PROMPT.question(`What is your pin number? \n`);
    let counter = 1;
    if (PIN_NUM !== pinNum  && counter !== null){
        console.log(`Incorrect pin number please try again!`);
        counter++;

    }
    else {
        counter > MAX_RETIRES;
        printGoodBye();
    }

}

function setInitialBalance() {
    currentMoney = 1000;
}

function userChoice() {
    process.stdout.write('\x1Bc');
    choice = Number(PROMPT.question(`What do you want to do? \n Please press 1 to withdraw money.  \n Please press 2 to deposit money.  \n Please press 3 to transfer funds. \n Please press 4 to check your current balance. \n Please press any other key to exit \n`));

         if(choice == 1) {
            makeWithdraw();
        }
        else if (choice == 2) {
            makeDeposit();
        }
        else if (choice == 3) {
            transFunds();
        }
        else if (choice == 4) {
            currentBalance();
        }
        else {
            printGoodBye();
        }
}

function makeWithdraw() {
    withDraw = PROMPT.question(`How much money would you like to withdraw?  \n`);
    currentMoney = currentMoney - withDraw;
    userChoice();
}

function makeDeposit() {
    deposit = PROMPT.question(`How much money would you like to deposit?  \n`);
    currentMoney = deposit +++ currentMoney;
    userChoice();

}

function transFunds() {
    transferFunds = PROMPT.question(`How much money would you like to transfer?  \n`);
    currentMoney = currentMoney - transferFunds;
    userChoice();
}

function currentBalance() {
    console.log(currentMoney);
    PROMPT.question(`\n Please press enter to continue. \n`);
    userChoice();

}

function printGoodBye() {
    console.log(`Thank you for banking with us!`);
}