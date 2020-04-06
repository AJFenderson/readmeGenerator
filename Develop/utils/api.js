const axios = require("axios");

const api = {
  getUser(username) {
    axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => console.log(response.data)) 
    .catch(error => console.log(error))
  }
};

api.getUser("AJFenderson");

module.exports = api;


// {headers: { Authorization: `token ${process.argv}`}}