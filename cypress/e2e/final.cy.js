/// <reference types="cypress" />

import { AutomationPracticeFormPage } from "../pageObjects/automationPracticeForm.page";

describe('Final task', () => {
	it('passes', () => {
		AutomationPracticeFormPage.visit();

		const months = ["", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

		const userData = {
			"Student Name": "Viktors Lačinovs",
			"Student Email": "email@email.com",
			"Gender": "Male",
			"Mobile": "3712000000",
			"Date of Birth": "28 February,1930",
			"Subjects": "Economics",
			"Hobbies": "Music",
			"Picture": "dontJudgeMyArt.png",
			"Address": "Some address 23",
			"State and City": "NCR Delhi",
		}

		AutomationPracticeFormPage.firstNameInput.type(userData["Student Name"].split(" ")[0]);
		AutomationPracticeFormPage.lastNameInput.type(userData["Student Name"].split(" ")[1]);
		AutomationPracticeFormPage.userEmailInput.type(userData["Student Email"]);
		AutomationPracticeFormPage.gender(userData["Gender"]).click();
		AutomationPracticeFormPage.mobileNumberInput.type(userData["Mobile"]);


		AutomationPracticeFormPage.dateOfBirthInput.click();
		AutomationPracticeFormPage.dateSelectYear.select(userData["Date of Birth"].split(",")[1]);
		AutomationPracticeFormPage.dateSelectMonth.select(months.indexOf(userData["Date of Birth"].split(",")[0].split(" ")[1].toLowerCase()));
		AutomationPracticeFormPage.dateSelectDate(userData["Date of Birth"].split(" ")[0]).click();
		
		AutomationPracticeFormPage.subjectsInput.type(userData["Subjects"]+"{enter}");
		AutomationPracticeFormPage.hobby(userData["Hobbies"]).click();
		AutomationPracticeFormPage.uploadPictureInput.selectFile("files/" + userData["Picture"]);

		AutomationPracticeFormPage.currentAddressInput.type(userData["Address"]);
		AutomationPracticeFormPage.stateInput.type(userData["State and City"].split(" ")[0]+"{enter}", {force: true});
		AutomationPracticeFormPage.cityInput.type(userData["State and City"].split(" ")[1]+"{enter}", {force: true});
		AutomationPracticeFormPage.submitButton.click();

		for(let i in userData){
			AutomationPracticeFormPage.resultTr(i, userData[i]).should("exist");
		}
	})
})