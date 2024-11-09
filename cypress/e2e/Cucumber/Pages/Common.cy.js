const locators = require('./ObjectRepository.json');

class LoginPage {



  enterURL(url) {
    cy.visit(url, { 'failOnStatusCode': false });

  }
  enterUserNamePassword(username, password) {
    cy.get(locators["UserName"]).type(username);
    cy.get(locators["Password"]).type(password);
    return this;
  }

  enterUserNamePassword(datatable) {
    datatable.hashes().forEach(element => {
      cy.get(locators["UserName"]).type(element.username);
      cy.get(locators["Password"]).type(element.password);
      return this;
    });

  }

  clickSubmitButton() {
    cy.get(locators["Submit"]).eq(0).click();
    return this;
  }
  verifyPageTitle() {
    return cy.title().should("eq", "Login: Mercury Tours");
  }
}
const login = new LoginPage();
export default login;