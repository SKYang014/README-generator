// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/page-template.js');
const writeFile = require('./utils/generate-site')
// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

//Creates the file/project name
const promptUser = readMeData => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your Project name? (Required)',
        validate: projectNameInput => {
        if (projectNameInput) {
            return true;
        } else {
            console.log('Please enter your Project name!');
            return false;
        }
        }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project:',
        },
        {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you use for this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use? (Check all that apply)',
            choices: ['Apache', 'Boost', 'BSD 3', 'Creative Commons']
        },
        {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter installation instructions?',
        default: true
        },
        {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions:',
        when: ({ confirmInstallation }) => confirmInstallation
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter usage information?',
            default: true
            },
            {
            type: 'input',
            name: 'usage',
            message: 'Provide some information about the usage of your project:',
            when: ({ confirmUsage }) => confirmUsage
            },
            {
                type: 'confirm',
                name: 'confirmContrib',
                message: 'Would you like to enter some information about contribution guidelines?',
                default: true
                },
                {
                type: 'input',
                name: 'contrib',
                message: 'Provide some information about contribution guidelines:',
                when: ({ confirmContrib }) => confirmContrib
                },
                {
                    type: 'confirm',
                    name: 'confirmTest',
                    message: 'Would you like to enter some information about test instructions?',
                    default: true
                    },
                    {
                    type: 'input',
                    name: 'test',
                    message: 'What are a few tests to perform with this application:',
                    when: ({ confirmTest }) => confirmTest
                    },
    ])
}





promptUser()
    .then(readmeData => {
        console.log(readmeData)
        return generatePage(readmeData)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    }); 
