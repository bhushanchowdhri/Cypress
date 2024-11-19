import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/Common.cy";

Before(() => {
    cy.reload();
})

After(() => {
    cy.reload();
    //test
})


Given("User Opens URL", () => {
    var envvalue = Cypress.env('env');
    login.enterURL(Cypress.env(envvalue));
})

When("User provides valid {string} and {string}", (username, password) => {
    login.enterUserNamePassword(username, password)
})
When("User clicks on Submit", () => {
    login.clickSubmitButton()
})
When("I login as", (datatable) => {
    login.enterUserNamePassword(datatable)
})

Then("User verifies title {string}", (title) => {

    cy.title().should('eq', title)
})

