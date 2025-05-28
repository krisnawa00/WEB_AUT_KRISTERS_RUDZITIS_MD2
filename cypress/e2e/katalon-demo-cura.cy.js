import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { MakeAppointmentPage } from "../pageObjects/MakeAppointmentPage";

describe("Selectable scenarios", () => {
	context("Select elements", () => {
		beforeEach(() => {
			HomePage.visit();
		});
		
		it("Make an Appointment", () => {
			HomePage.makeAppointment.click();
			LoginPage.usernameField.type("John Doe");
			LoginPage.passwordField.type("ThisIsNotAPassword");
			LoginPage.loginButton.click();
			MakeAppointmentPage.comboFacility.select("Seoul CURA Healthcare Center");
			MakeAppointmentPage.applyCheckBox.click();
			MakeAppointmentPage.medicaidRadioBtn.click();
			MakeAppointmentPage.visitDateInput.click();
			MakeAppointmentPage.selectDay.contains("30").click();
			MakeAppointmentPage.commentField.type("CURA Healthcare Service");
			MakeAppointmentPage.bookAppointmentBtn.click();
			MakeAppointmentPage.appointmentConfirmation.contains("Appointment Confirmation");
		});
		
		it("Appointment history empty", () => {
			HomePage.makeAppointment.click();
			LoginPage.usernameField.type("John Doe");
			LoginPage.passwordField.type("ThisIsNotAPassword");
			LoginPage.loginButton.click();
			MakeAppointmentPage.menuBar.click();
			MakeAppointmentPage.sideBar.should("have.class", "active")
			MakeAppointmentPage.historyOption.click();
			MakeAppointmentPage.historyPage.contains("No appointment.");
		});
	});
});