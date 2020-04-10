fs = require("fs");


function generateMarkdown(data, obj) {
  const readmeInfo = `
<h1> # ${obj.title} <h1>
<img src="${data.avatar_url}" alt="Profile Picture" align="right"> 

<h2> Table of Contents: </h2>
    <ul>
    <li> Description </li>
    <li> User story </li>
    <li> Installation </li>
    <li> Technology Stack </li>
    <li> Contributors </li>
    <li> Test </li>
    <li> License</li>
    </ul>


<h2> Description: <h2>
<ul>
    <li> ${obj.description} </li>
    </ul>

    <h2> User story: <h2>
<ul>
<li>${obj.usage} </li>
</ul>

<h2> Installation: <h2>
<ul>
<li>${obj.installation} </li>
</ul>

<h2> Technology Used: <h2>
<ul>
<li>${obj.tableOfContents}</li>
</ul>

<h2> Contributors: <h2>
<ul>
<li> ${obj.contributors} </li>
</ul>

<h2> Contact Infomation: <h2>
<ul>
<li> Github: ${obj.username} </li>
<li> e-mail: ${obj.email} </li>
<li> LinkedIn: ${obj.linked} </li>
</ul>


<h2>License: <h2>
<img src="https://img.shields.io/badge/License-${obj.license}-green" >


<h2> Tests: <h2>
<ul>
<li> To run tests, run npm run test </li>
</ul>

<h2> Questions: <h2>
${data.questions}


`;
  // what file your writing to, what info were writing to file, error function
  fs.writeFile("genReadMe.md", readmeInfo, function (error) {
    if (error) { console.log(error) }
    console.log("success!")
  })
}

module.exports = generateMarkdown;


