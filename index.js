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
    return Math.ceil(Math.random() * 2);
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
// async function playAgain(){
//   do {
//     await guessNumber()
//   } while (score);
// }
// playAgain()
// const questions = [
//     {
//       type: 'confirm',
//       name: 'toBeDelivered',
//       message: 'Is this for delivery?',
//       default: false,
//     },
//     {
//       type: 'input',
//       name: 'phone',
//       message: "What's your phone number?",
//       validate(value: string) {
//         const pass = value.match(
//           /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//         );
//         if (pass) {
//           return true;
//         }
//         return 'Please enter a valid phone number';
//       },
//     },
//     {
//       type: 'list',
//       name: 'size',
//       message: 'What size do you need?',
//       choices: ['Large', 'Medium', 'Small'],
//       filter(val: string) {
//         return val.toLowerCase();
//       },
//     },
//     {
//       type: 'input',
//       name: 'quantity',
//       message: 'How many do you need?',
//       validate(value: string) {
//         const valid = !isNaN(parseFloat(value));
//         return valid || 'Please enter a number';
//       },
//       filter: Number,
//     },
//     {
//       type: 'expand',
//       name: 'toppings',
//       message: 'What about the toppings?',
//       choices: [
//         {
//           key: 'p',
//           name: 'Pepperoni and cheese',
//           value: 'PepperoniCheese',
//         },
//         {
//           key: 'a',
//           name: 'All dressed',
//           value: 'alldressed',
//         },
//         {
//           key: 'w',
//           name: 'Hawaiian',
//           value: 'hawaiian',
//         },
//       ],
//     },
//     {
//       type: 'rawlist',
//       name: 'beverage',
//       message: 'You also get a free 2L beverage',
//       choices: ['Pepsi', '7up', 'Coke'],
//     },
//     {
//       type: 'input',
//       name: 'comments',
//       message: 'Any comments on your purchase experience?',
//       default: 'Nope, all good!',
//     },
//     {
//       type: 'list',
//       name: 'prize',
//       message: 'For leaving a comment, you get a freebie',
//       choices: ['cake', 'fries'],
//       when(answers: { comments: string; }) {
//         return answers.comments !== 'Nope, all good!';
//       },
//     },
//   ];
//   inquirer.prompt(questions).then((answers) => {
//     console.log('\nOrder receipt:');
//     console.log(JSON.stringify(answers, null, '  '));
//   });
