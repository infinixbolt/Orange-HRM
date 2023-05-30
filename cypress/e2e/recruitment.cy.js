import { describe } from "mocha";
import testData from '../fixtures/testdata.json';
import { LoginPageObject } from "../page-objects/login.page-object";
import {RecruitmentPageObject} from "../page-objects/recruitment.page-objects"

let loginPage = new LoginPageObject();
let RecruitmentPage = new RecruitmentPageObject();

describe("Recruitment functionality test", ()=>{
    beforeEach(() =>{
      cy.visit("/web/index.php/auth/login");  
    });

  // TC-01: Login with a valid username and password
  // Expected Result: The user should be redirected to the recruitment page
  it.only('Add a vacancy', () => {
    loginPage.login(testData.validUsername, testData.validPassword);
    RecruitmentPage.validateAddAVacancy();
  });

  it('Delete a vacancy', () =>{
    loginPage.login(testData.validUsername, testData.validPassword);
    RecruitmentPage.validateDeleteAVacancy();
  })


})