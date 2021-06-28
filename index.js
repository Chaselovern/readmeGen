const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./code/generateMarkdown.js')

function questions() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your project name"
          },
          {
            type: "input",
            name: "description",
            message: "Please describe your project"
          },
          {
            type: "input",
            name: "installation",
            message: "Please list any installations required"
          },
          {
            type: "input",
            name: "usecase",
            message: "Please describe the use of the application"
          },
          {
            type: "input",
            name: "contributions",
            message: "Please list any contribution rules?"
          },
          {
            type: "input",
            name: "instructions",
            message: "Please provide test instructions if applicable"
          },
          {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)", 
              "[GNU GPLv3 License](COPYING.txt)", 
            ]
          },
          {
            type: "input",
            name: "email",
            message: "Please enter your email account"
          },
          {
            type: "input",
            name: "github",
            message: "Please enter your github username"
          }
        ]);
      }
      function generateFile(answers) {
        return `# ${answers.name}
          
      #### Table of Contents
      1. [Project Description](#project-description)
      2. [Installation Instructions](#installation-instructions)
      3. [Usage Information](#usage-information)
      4. [Contributor Guidelines](#contributor-guidelines)
      5. [Code of Conduct](#code-of-conduct)
      6. [Test Instructions](#test-instructions)
      7. [License](#license)
      8. [Questions](#questions)
      ## Project Description
      * ${answers.description}
      ## Installation Instructions
      * ${answers.install}
      ## Usage Information
      * ${answers.use}
      ## Contributor Guidelines
      * ${answers.contributions}
      ## Code of Conduct
      * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
      ## Test Instructions
      * ${answers.test}
      ## License
      * licensed under the ${answers.license}
      ## Questions
      * For additional help or questions about collaboration, please reach out to ${answers.email}
      * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
        
      }
      
      questions()
        .then(function(answers) {
          const readme = generateFile(answers);
      
       
          return writeFileAsync("README.md", readme);
        })
        .then(function() {
          console.log(" README.md has been created!");
        })
        .catch(function(err) {
          console.log(err);
        });
