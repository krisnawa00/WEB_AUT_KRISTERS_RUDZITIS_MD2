import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com/";
  }
  
  static get makeAppointment() {
    return cy.get("#btn-make-appointment");
  }

}
