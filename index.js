// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require("./utility/generateMarkdown");

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
    name: "installations instructions",
  },
  {
    type: "input",
    message: "How will this be used?",
    name: "usage information",
  },
  {
    type: "input",
    message: "What are the guidelines for contributing?",
    name: "contribution guidelines",
  },
  {
    type: "input",
    message: "What are the instruction for testing?",
    name: "testing instructions",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email address",
  },
  {
    type: "input",
    message: "Please choose a license",
    name: "",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", html, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
