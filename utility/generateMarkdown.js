// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return "";
  }
  return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "N/A") {
    return "";
  }
  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return "";
  }
  return `## License 

  ${license} has been chosen
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installations}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Testing

${data.testing}

## Questions 

[GitHub](https://github.com/${data.github})
[Email](${data.email})

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
