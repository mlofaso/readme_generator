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
    title: "",
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
//     const html = `<!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//         <title>Document</title>
//     </head>

//     <body>
//         <header class="p-5 mb-4 header bg-light">
//             <div class="container">
//                 <h1 class="display-4">Hi! My name is ${response.name} </h1>
//                 <p class="lead">I am from ${response.place}.</p>
//                 <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//                 <ul class="list-group">
//                     <li class="list-group-item">My GitHub username is ${response.githuburl}</li>
//                     <li class="list-group-item">LinkedIn: ${response.linkedinurl}</li>
//                 </ul>
//             </div>
//         </header>
//     </body>

//     </html>`;

//     fs.writeFile("index.html", html, (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Success!");
//     });
//   });
