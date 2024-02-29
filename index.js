// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require("./util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },

  {
    type: "input",
    message: "Where are you from?",
    name: "place",
  },
  {
    type: "input",
    message: "what is your favorite hobby?",
    name: "hobby",
  },
  {
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "linkedinurl",
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "githuburl",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//   .then((response) => {
//     const

//     fs.writeFile("", , (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Success!");
//     });
//   });
