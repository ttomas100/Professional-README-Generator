const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

const readMe = [
    {
        type: "input",
        name: "title",
        message: "What is the title of my project?"
    },
    {
        type: "input",
        name: "badge",
        message: "what is the badge for the licence?"
    },
    {
        type: "input",
        name: "description",
        message: "Tell me the description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Tell me the instructions of the project"
    },
    {
        type: "input",
        name: "usage",
        message: "What about the usage of the project"
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the project licence"
    },
    {
        type: "input",
        name: "contributing",
        message: "Do you have any contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Any project tests?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repository link?"
    },
];

inquirer
    .prompt(readMe)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;
        axios.get(queryUrl).then(function(response) {
            
            const githubInfo = {
                email: response.data.email,
                profile: response.data.html_url,

            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

function init() {

}

init();
