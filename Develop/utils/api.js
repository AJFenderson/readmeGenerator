const axios = require("axios");

const api = {
  getUser(username) {
    axios
    .get(`https://api.github.com/users/AJFenderson`)
    .then(response => console.log(response)) 
    .catch(error => console.log(error))
  }
};

api.getUser();

module.exports = api;


// {headers: { Authorization: `token ${process.argv}`}}