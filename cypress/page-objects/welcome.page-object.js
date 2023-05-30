export class WelcomePageObject {

	profileIconPopupLocator = ".block";
	firstNameFieldLocator = "input[name='firstname']";
	emailFieldLocator = "input[name='email']";
	fullNameLocator = ".oxd-userdropdown-tab";

    validatePageTitle() {
		
	}

	validateUserIsLoggedIn() {
		cy.get(this.fullNameLocator).contains('Paul345345345345345345345345 Collings');
	}
}
