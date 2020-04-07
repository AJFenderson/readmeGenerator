require('dotenv').config()
const axios = require("axios");

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

api.getUser("acd37");

module.exports = api;


const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
