import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com/profile.php#login";
  }
  
  static get usernameField() {
    return cy.get("#txt-username");
  }
  
  static get passwordField() {
    return cy.get("#txt-password");
  }
  
  static get loginButton() {
    return cy.get("#btn-login");
  } 
}