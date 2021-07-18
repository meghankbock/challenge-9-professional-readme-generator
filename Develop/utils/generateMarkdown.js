const licenseInfo = [
  {
    license: "MIT",
    badge:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    license: "GPLv2",
    badge:
      "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    license: "Apache 2.0",
    badge:
      "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    license: "Mozilla",
    badge:
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    license: "BSD 3-clause",
    badge:
      "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
    link: "https://opensource.org/licenses/BSD-3-Clause",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInput) {
  let badge = "";
  if (!licenseInput) {
  } else {
    licenseInfo.forEach((item) => {
      if (item.license === licenseInput) {
        badge = item.badge;
      }
    });
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInput) {
  let link = "";
  if (!licenseInput) {
  } else {
    licenseInfo.forEach((item) => {
      if (item.license === licenseInput) {
        link = item.link;
      }
    });
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `This project is covered under the ${license} ${renderLicenseBadge(license)} license type.\n
  For more information: ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
module.exports = (templateData) => {
  //function generateMarkdown(readMeData) {
  const {
    title,
    description,
    license,
    installation,
    usage,
    contributing,
    tests,
    ...contact
  } = templateData;
  return `
  # ${title}
  \n
  ## Table of Contents
  * [Description](#Description)
  * [Installation Instructions](#Installation-Instructions)
  * [Usage Information](#Usage-Information)
  * [Contributing Guidelines](#Contributing-Guidelines)
  * [Test Instructions ](#Test-Instructions)
  * [Licensing](#Licensing)
  * [Questions](#Questions)
  \n
  ## Description
  ${description}
  \n
  ## Installation Instructions
  ${installation}
  \n
  ## Usage Information 
  ${usage}
  \n
  ## Contributing Guidelines
  ${contributing}
  \n
  ## Test Instructions 
  ${tests}
  \n
  ## Licensing
  ${renderLicenseSection(license)}
  \n
  ## Questions
  * GitHub Profile: ${contact.userName}
  * Contact me at [${contact.email}](mailto:${contact.email})
  \n

`;
};
