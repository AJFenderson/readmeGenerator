require('dotenv').config()
const axios = require("axios");

// const api = {
//   getUser(username) {
//     axios
//     .get(`https://api.github.com/users/${username}`, {
//       headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
//     })
//     .then(response => console.log(response.data)) 
//     .catch(error => console.log(error))
//   }
// };

// api.getUser("acd37");

module.exports = api;


// {headers: { Authorization: `token ${process.argv}`}}
// GH_TOKEN =a7f11a54e84f647bba88c0ef3e5d1dc1857e9b4d