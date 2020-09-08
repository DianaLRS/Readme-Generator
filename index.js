const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");


// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    },
    {
        type: "input",
        message: "What is the project about? Give a detailed description of your project?",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents.",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What does the user need to install to run this app (ie...dependencies)?",
        name: "Installation"
    }, {
        type: "input",
        message: "How to use the app?",
        name: "Usage"
    }, {
        type: "input",
        message: "What liscence is being used? (ie...MIT)",
        name: "License"
    }, {
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contributing"
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact info for inquiries.",
        name: "Questions"
    }

]


// function to write README file
// function writeToFile(fileName, data) {




// }

// function to initialize program
function init() {
    prompt(questions)
        .then(data => {
            writetoFile("README.md")
        })

}

// function call to initialize program
init();