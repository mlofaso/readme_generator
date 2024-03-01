// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utility/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },

  {
    type: "input",
    message: "What is the nature of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "What applications need to be installed?",
    name: "installations",
  },
  {
    type: "input",
    message: "How will this be used?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the guidelines for contributing?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the instructions for testing?",
    name: "testing",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Please choose a license",
    name: "license",
    choices: ["MIT", "Joomla", "GNU", "Apache", "Rust", "N/A"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
