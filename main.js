#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat(80));
console.log(chalk.bold.yellowBright("\n\t\tWelcome to Qareer-ul-Ain  'Quiz System'\n\t\t "));
console.log("=".repeat(80));
console.log(chalk.bold.italic.green("\n\t\t Quiz About 'Biriyani Recipe'\n\t\t "));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Which meat is commonly used in traditional biryani?",
        choices: ["Chicken ", "Beef", "Mutton", "Fish"],
    },
    {
        name: "question_2",
        type: "list",
        message: "What is the primary spice blend used in biryani?",
        choices: ["Garam masala", "Curry powder", "Cumin", "Paprika"],
    },
    {
        name: "question_3",
        type: "list",
        message: "What type of rice is typically used in making biryani?",
        choices: ["Jasmine", "Basmati", "Long-grain", "Arborio"],
    },
    {
        name: "question_4",
        type: "list",
        message: "What is a key ingredient that adds fragrance to biryani?",
        choices: ["Thyme", "Oregano", "Parsley", "Saffron"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Which cooking method is commonly used to prepare biryani?",
        choices: ["Stir-frying", "Boiling", "Steaming", "Grilling"],
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Mutton":
        console.log("1. Correct✨ ");
        ++score;
        break;
    default:
        console.log("1. Incorrect😞");
}
switch (quiz.question_2) {
    case "Garam masala":
        console.log("2. Correct✨");
        ++score;
        break;
    default:
        console.log("2. Incorrect😞");
}
switch (quiz.question_3) {
    case "Basmati":
        console.log("3. Correct✨");
        ++score;
        break;
    default:
        console.log("3. Incorrect😞");
}
switch (quiz.question_4) {
    case "Saffron":
        console.log("4. Correct✨");
        ++score;
        break;
    default:
        console.log("4. Incorrect😞");
}
switch (quiz.question_5) {
    case "Steaming":
        console.log("5. Correct✨");
        ++score;
        break;
    default:
        console.log("5. Incorrect😞");
}
console.log(">".repeat(80));
console.log(chalk.bold.italic.magenta(`Total Score is: ${score}`));
console.log("<".repeat(80));
