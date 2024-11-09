const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/reports/cucumber-json', // Path to where JSON is generated
    reportPath: 'cypress/reports/cucumber-html-report', // Report output folder
    screenshotsDirectory: 'cypress/screenshots',  // Ensure the path matches where Cypress saves screenshots
    storeScreenshots: true,  // Attach screenshots for failed scenarios
    metadata: {
        browser: {
            name: 'chrome',
            version: '120'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',  // Make sure platform name is correct
            version: '11'
        }
    },
    customData: {
        title: 'Cypress Cucumber Reports',
        data: [
            { label: 'Project', value: 'Bhushan Project' },
            { label: 'Release', value: '1.2.3' },
            { label: 'Cycle', value: 'B11221.34321' },
            { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
            { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' }
        ]
    }
});
