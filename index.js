// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "Enter your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a  description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license do you want for your project?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });

}

// Function call to initialize app
init();


// Imported required packages


// Array of questions for user input


