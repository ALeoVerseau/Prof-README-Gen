// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  *[Descriptions]{#descriptioins}
  *[License]{#license}
  *[Installation]{#installation}
  *[Usage]{#usage}
  *[Contributions]{#contributing}
  *[Testing]{#testing}
  *[Questions]{#questions}
  ## Description
  ${data.description}
  ## Requirements
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributing}
  ## Testing
  ${data.testing}
  ## Questions
  Please contact me here: ${data.questions}
  and here at my GitHub: ${data.username}
`;
}

module.exports = generateMarkdown;
