// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? (required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project (required):",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username? (required)",
    validate: (userNameInput) => {
      if (userNameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (required)",
    validate: (userNameInput) => {
      if (userNameInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide testing instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "What license type are you using for your project?",
    choices: ["MIT", "GPLv2", "Apache", "Mozilla", "BSD 3-clause"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, readMeFile) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/" + fileName + "-README.md", readMeFile, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  let fileName = "";
  inquirer.prompt(questions)
    .then((userInput) => {
      fileName = userInput.title;
      return generateMarkdown(userInput);
    })
    .then((readMeFile) => {
      return writeToFile(fileName, readMeFile);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
