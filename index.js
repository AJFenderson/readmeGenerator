require('dotenv').config({path: __dirname + '/.env'})
const axios = require("axios");
const inquirer = require("inquirer");

const genMd = require("./generateMarkdown")

console.log(process.env.GH_TOKEN)

const api = {
    getUser(username) {
      axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
      })
      .then(response => console.log(response.data)) 
      .catch(error => console.log(error))
    }
  };

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

function init() {
inquirer.prompt([   
{type: "input",
message:"Enter your Github user name:",
name:"username"},

// {type: "input",
// message:"Enter the title of your application:",
// name:"title"},

// {type: "input",
// message:"List the installation process steps needed to use your application",
// name:"username"},

// {type: "input",
// message:"What is your Github user name?",
// name:"username"},

// {type: "input",
// message:"What is your Github user name?",
// name:"username"},

// {type: "input",
// message:"What is your Github user name?",
// name:"username"},

// {type: "input",
// message:"What is your Github user name?",
// name:"username"},

// {type: "input",
// message:"What is your Github user name?",
// name:"username"},

// {type:,
// message:
// name:
// }


]) .then(function(response){
let username = response.username
api.getUser(username, response)
})

}

init();

// * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions