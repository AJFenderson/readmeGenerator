const fs = require("fs")


function generateMarkdown(data) {
  const readmeInfo = `
# ${data.title}

`;
// what file your writing to, what info were writing to file, error function
fs.writeFile("genReadMe.md",readmeInfo, function(error){if (error) {console.log(error)}
 console.log ("success!")
})
}

module.exports = generateMarkdown;

// * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
