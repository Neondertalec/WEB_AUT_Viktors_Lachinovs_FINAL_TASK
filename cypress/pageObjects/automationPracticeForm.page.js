import { BasePage } from "./base.page";

export class AutomationPracticeFormPage extends BasePage {
	static get url(){
		return "/automation-practice-form";
	}

	static get firstNameInput(){
		return cy.get("#firstName");
	}
	static get lastNameInput(){
		return cy.get("#lastName");
	}
	static get userEmailInput(){
		return cy.get("#userEmail");
	}
	static get mobileNumberInput(){
		return cy.get("#userNumber");
	}

	static gender(gender){
		return cy.get("#genterWrapper .custom-control").contains(gender);
	}

	static get dateOfBirthInput(){
		return cy.get("#dateOfBirthInput");
	}
	
	static get dateSelectMonth(){
		return cy.get(".react-datepicker__month-select");
	}
	static get dateSelectYear(){
		return cy.get(".react-datepicker__year-select");
	}
	static dateSelectDate(date){
		return cy.get(".react-datepicker__day").contains(date);
	}
	
	static get subjectsInput(){
		return cy.get("#subjectsInput");
	}

	static hobby(hobby){
		return cy.get("#hobbiesWrapper .custom-control").contains(hobby);
	}

	static get uploadPictureInput(){
		return cy.get("#uploadPicture");
	}

	static get currentAddressInput(){
		return cy.get("#currentAddress");
	}
	static get stateInput(){
		return cy.get("#react-select-3-input");
	}
	
	static get cityInput(){
		return cy.get("#react-select-4-input");
	}

	static resultTr(key, value){
		return cy.get(".table-responsive tr").contains(key).parent('tr').contains(value);
	}
	
	static get submitButton(){
		return cy.get("#submit");
	}
}