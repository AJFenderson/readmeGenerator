require('dotenv').config({path: __dirname + '/.env'})
const axios = require("axios");
const inquirer = require("inquirer");

const genMd = require("./generateMarkdown")

console.log(process.env.GH_TOKEN)

const api = {
    getUser(username,res) {
      axios
      .get(`https://api.github.com/users/${username}`, {
        headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
      })
      .then(function(response){
          console.log(response.data)
          genMd(response, res)
      })
    //   .then(response => console.log(response.data)
       
      .catch(error => console.log(error))
    }
  };

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }
// const questions = [

function init() {
inquirer.prompt([   
{type: "input",
message:"Enter your Github user name:",
name:"username"},

{type: "input",
message:"Enter your e-mail:",
name:"email"},

{type: "input",
message:"Enter your LinkedIn username:",
name:"linked"},

{type: "input",
message:"Enter the title of your application:",
name:"title"},

{type: "input",
message:"Describe your application:",
name:"description"},

{type: "input",
message:"List all of the contents used in your application:",
name:"tableOfContents"},

{type: "input",
message:"Describe the installation process  to use your app:",
name:"installation"},

{type: "input",
message:"State the user story:",
name:"usage"},

{type: "input",
message:"List all the contributors for your app:",
name:"contributors"
}

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