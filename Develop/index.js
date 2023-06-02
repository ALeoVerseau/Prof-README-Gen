// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [

{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
},
{
    type: "checkbox",
    name: "license",
    message: "Please select a license available to this project",
    choices: ["MIT", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    name: "installation",
    message: "Is there anything the user needs to know to install this project?",
},
{
    type: "input",
    name: "usage",
    message: "What is the intended use for this project?"
},
{
    type: "input",
    name: "contributing",
    message: "Are there any other contributors to this project?",
},
{
    type: "input",
    name: "testing",
    message: "Were there any tests made?",
},
{
    type: "input",
    name:"questions",
    message: "If there are any questions the user may have, how can they contact you?"
},
{
    type: "input",
    name:"username",
    message:"What is your GitHub username?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Generating a README.md file...");
        writeToFile("./utils/README.md", generateMarkdown({...responses})); 
    }); 
} 

// Function call to initialize app
init();
