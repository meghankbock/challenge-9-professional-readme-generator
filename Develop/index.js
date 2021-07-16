// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
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
      message: "Please provide a description of your project.",
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
      name: "repoUrl",
      message: "What is the URL for your repository?",
      validate: (repoInput) => {
        if (repoInput) {
          return true;
        } else {
          console.log("Please enter the URL for your repository.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "gitPagesUrl",
      message: "What is the URL for your project's GitHub Page?",
      validate: (gitPageInput) => {
        if (gitPageInput) {
          return true;
        } else {
          console.log("Please enter the URL for your's project's GitHub Page.");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What type of license are you using for your project?",
      choices: ["Slack", "Text", "Email", "Phone"], // to be updated
    },
  ]);
};

const promptReadMe = (readMeData) => {
  if (!readMeData.projects) {
    //readMeData.projects = [];
  }
  console.log(`
        ========================
        Create a new README file
        ========================
    `);
    console.log(readMeData);
    console.log(readMeData.title);
};

// TODO: Create a function to write README file
function writeToFile(fileName, readMeFile) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", readMeFile, (err) => {
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
  promptUser()
    .then(promptReadMe)
    .then(readMeData => {
      return generateMarkdown(readMeData);
    })
    .then((readMeFile) => {
      return writeFile(readMeFile);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
