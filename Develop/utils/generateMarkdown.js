const licenseInfo = [
  {
    license: "x",
    badge: "y",
    link: "z",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    for (let i = 0; i < licenseInfo.length; i++) {
      if (license == licenseInfo.license) {
        return licenseInfo.badge;
      } else {
        return "";
      }
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    for (let i = 0; i < licenseInfo.length; i++) {
      if (license == licenseInfo.link) {
        return licenseInfo.link;
      } else {
        return "";
      }
    }
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `
  # ${license}
  ## ${renderLicenseBadge(license)}
  ## ${renderLicenseLink(license)}
 `;
  }
};

// TODO: Create a function to generate markdown for README
module.exports = (templateData) => {
//function generateMarkdown(readMeData) {
  console.log(templateData);
  const { title, description, license, repoUrl, gitPagesUrl } = templateData;
  return `
  # ${title}
  \n-------------------\n
  # ${description}
  \n-------------------\n
  ${renderLicenseSection(license)}
`;
};


