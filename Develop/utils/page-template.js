

module.exports = templateData => {
    function renderLicenseBadge(license) {
        if (license == 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
        if (license == 'Boost') {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
        `
        }
        if (license == 'BSD 3') {
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
            }
            if (license == 'Creative Commons') {
                return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
                }
        else {
            return ""
        }
        
    }

    //const { projectName, username, ...data } = templateData;
    return `
# ${templateData.projectName}

## Description:
${templateData.description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${templateData.install}

## Usage

${templateData.usage}

## Contributing

Contributors: ${templateData.contrib}

## License
${renderLicenseBadge(templateData.license)}


---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Features

This project features the following languages: ${templateData.languages}

## How to Contribute

Contributors: ${templateData.contrib}

## Tests
Here are a few tests to perform with this application:
${templateData.test}

## Questions
Further quetions?  Please feel free to reach out to me at: 
${templateData.email} or view my profile at https://github.com/${templateData.username}

`
}