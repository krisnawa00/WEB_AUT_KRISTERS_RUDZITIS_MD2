import { BasePage } from "../pageObjects/basePage";

export class MakeAppointmentPage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com/#appointment";
  }

  static get historyPage() {
    return cy.get("#history");
  }

  static get medicaidRadioBtn() {
    return cy.get("#radio_program_medicaid");
  }

  static get bookAppointmentBtn() {
    return cy.get("#btn-book-appointment");
  }

  static get applyCheckBox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get commentField() {
    return cy.get("#txt_comment");
  }

  static get comboFacility() {
    return cy.get("#combo_facility");
  }

  static get sideBar() {
    return cy.get("#sidebar-wrapper");
  }

  static get historyOption() {
    return cy.get('a[href="history.php#history"]');
  }

  static get appointmentConfirmation() {
    return cy.get("#summary");
  }

  static get menuBar() {
    return cy.get("#menu-toggle");
  }

  static get visitDateInput() {
    return cy.get("#txt_visit_date");
  }

  static get selectDay() {
    return cy.get(".day");
  }
}
