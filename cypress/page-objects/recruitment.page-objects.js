export class RecruitmentPageObject{
recruitmentPage = ":nth-child(5) > .oxd-main-menu-item";   
vacancyTab = ".oxd-topbar-body-nav > ul > :nth-child(2)" 
addVacancyButton = ".orangehrm-header-container > .oxd-button";
vacancyNameLocator = ".oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
//jobTitleSelector = ".oxd-select-text--after > .oxd-icon";
jobTitleSelector =".oxd-select-text";
jobDescription = 'textarea[placeholder="Type description here"]';
hiringManager = 'input[placeholder="Type for hints..."]';
numberOfPositions = '.oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input';
saveButton = 'button[type="submit"]';




validateAddAVacancy(){
    cy.get(this.recruitmentPage).click().get(this.vacancyTab).click().get(this.addVacancyButton).click();
    cy.wait(3000);
    cy.get(this.vacancyNameLocator).type("Project Manager");
    cy.get(this.jobTitleSelector).click().get('div[role="listbox"]').contains("IT Manager").click();
    cy.get(this.jobDescription).type("We are looking for a Project Manager to manage our IT Projects.");
    cy.get(this.hiringManager).type("John  Smith");
    cy.wait(3000);
    cy.get('.oxd-autocomplete-dropdown').contains("John").click();
    cy.get(this.numberOfPositions).type("3");
    cy.get(this.saveButton).click();
    cy.get(this.recruitmentPage).click().get(this.vacancyTab).click();
    cy.get('.oxd-table-body').contains("Project Manager","frttt");
}

validateDeleteAVacancy(){
    cy.get(this.recruitmentPage).click().get(this.vacancyTab).click();
    cy.get('.oxd-table-body').should('contain', 'Project Manager').should('contain', 'IT Manager');

}
}

