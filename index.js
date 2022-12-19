#! /usr/bin/env node
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
function sleep() {
    return new Promise((res) => {
        setTimeout(res, 100);
    });
}
async function welcome() {
    const rainbow = chalkAnimation.rainbow('Welcome to the number guessing game');
    await sleep();
    rainbow.stop();
}
function randomNumber() {
    return Math.ceil(Math.random() * 5);
}
await welcome();
let score = 0;
async function guessNumber() {
    var answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'userInput',
            message: 'Please enter a number between 1-5 ',
        },
    ]);
    let sysNum = randomNumber();
    while (answer.userInput == sysNum) {
        score += 5;
        console.log(chalk.green('correct:' + chalk.yellow('your score is: ') + chalk.redBright(score)));
        await inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message: 'Please enter a number between 1-5 ',
            },
        ]);
        sysNum = randomNumber();
    }
    console.log('incorrect');
    let again = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'replay',
            message: 'would you run again'
        }
    ]);
    if (again.replay) {
        score = 0;
        guessNumber();
    }
}
;
guessNumber();
