const { defineConfig } = require("cypress");
const { exec } = require('child_process');
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs');  // Import fs for checking file existence

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,  // Ensure screenshots are captured on failure
  screenshotsFolder: 'cypress/screenshots', // Make sure this matches in report script
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    setupNodeEvents(on, config) {
      // Cucumber Preprocessor
      on("file:preprocessor", cucumber());

      // Register the custom task for checking file existence
      on('task', {
        doesFileExist(filePath) {
          return fs.existsSync(filePath);
        }
      });

      // Execute custom report generation after tests complete
      on('after:run', () => {
        exec('node cypress/cucumber-html-report.js', (err, stdout, stderr) => {
          if (err) {
            console.error(`Error generating report: ${stderr}`);
            return;
          }
          console.log(`Report generated: ${stdout}`);
        });
      });

      return config;
    },
  },
  env: {
    'qa': 'https://demo.guru99.com/test/newtours/',
    'qa1': 'https://www.google.co.in/?hl=hi',
    'cucumber-json': {
      enabled: true,
      output: 'cypress/reports/cucumber-json',  // Ensure JSON is generated in the correct directory
    }
  }
});
