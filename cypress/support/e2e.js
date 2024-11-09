// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
//import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')
//const { defineSupportCode } = require('@badeball/cypress-cucumber-preprocessor');

// Register step definitions
// defineSupportCode(({ Given, When, Then }) => {
//   // You can define additional steps or hooks here if needed.
//   // However, it's recommended to keep the step definitions in the 'cypress/e2e/step_definitions' directory.

//   // Example of defining a step directly here:
//   // Given('I open the homepage', () => {
//   //   cy.visit('https://example.com');
//   // });

//   // Then('I see the title', () => {
//   //   cy.title().should('include', 'Example Domain');
//   // });
// });

// This file is processed and loaded automatically before your test files.
// You can use this file to load additional plugins or configure global settings.

// You can include other setup or utility functions here, if needed.
// For example, setting a base URL or initializing state before tests run.

// Cypress configuration options can also be set here, if needed.

afterEach(() => {
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    if (window.cucumberJson?.generate) {
        const testState = window.testState;
        const stepResult =
            testState.runTests[testState.currentScenario.name][testState.currentStep];
        if (stepResult?.status === "failed") {
            const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;

            //var screenshotPath = `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`;
            var screenshotPath = "C:\Users\Bhushan\Desktop\CypressCucumber\cypress\screenshots\newtours.feature\New tours validation -- Verify title (failed).png"
            // Check if the file exists using cy.task
            cy.task('doesFileExist', screenshotPath).then((exists) => {
                if (exists) {
                    // If file exists, read it and attach to the report
                    cy.pause()
                    cy.readFile(screenshotPath, 'base64').then((imgData) => {
                        stepResult.attachment = {
                            data: imgData,
                            media: { type: "image/png" },
                            index: testState.currentStep,
                            testCase: testState.formatTestCase(testState.currentScenario),
                        };
                    });
                }
            });
        }
    }
});
