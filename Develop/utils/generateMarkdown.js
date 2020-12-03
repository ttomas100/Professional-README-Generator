
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

${data.badge}

##Walkthrough Video

Walkthrough Video

https://drive.google.com/file/d/148cngohaAM3_DDNMrADCIPZ7oTgkGCs2/view

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation

        ${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributors

${data.contributing}

## Test

${data.test}


## Repository

- [Project Repo](${data.repo})

## GitHub

- [GitHub Profile](${githubInfo.profile})

`;
}

module.exports = generateMarkdown;
