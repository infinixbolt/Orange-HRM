export class LoginPageObject {
	usernameFieldLocator = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    passwordFieldLocator =":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
    loginButtonLocator = ".oxd-button";
    infoMessageLabel = ".oxd-alert";
    usernameEmptyLabel = ":nth-child(2) > .oxd-input-group > .oxd-text";
    passwordEmptyLabel = ":nth-child(3) > .oxd-input-group > .oxd-text";

    login(email, password) {
        if(email != "") {
            cy.enterText(this.usernameFieldLocator, email, 'email field');
        }

        if(password != "") {
            cy.enterText(this.passwordFieldLocator, password, 'password field');
        }
        
        cy.clickElement(this.loginButtonLocator, 'login button');
	}

    validateInvalidCredentials() {
		cy.get(this.infoMessageLabel).contains("Invalid credentials");
        cy.get(this.usernameFieldLocator).should('exist');
        cy.get(this.passwordFieldLocator).should('exist');
	}

    validateEmptyCredentials() {
		cy.get(this.usernameEmptyLabel).contains("Required").get(this.passwordEmptyLabel).contains("Required");
        //cy.get(this.emailEmptyLabel).contains("Required");
        //cy.get(this.passwordEmptyLabel).contains("Required");
        cy.get(this.usernameFieldLocator).should('exist');
        cy.get(this.passwordFieldLocator).should('exist');
	}

    validateMinimumPasswordLength() {
		cy.get(this.infoMessageLabel).contains("password must be at least 8 characters");
        cy.get(this.usernameFieldLocator).should('exist');
        cy.get(this.passwordFieldLocator).should('exist');
	}
}
