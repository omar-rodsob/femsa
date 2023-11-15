class SpecPages{
    elements ={
        cookiesButton:()=>cy.get('.styles__buttons-container--1GIqr > .primary__default--25RCR'),
        applyButton:()=>cy.get('[data-ui="overview-apply-now"]'),
        applicationTitle:()=>cy.get('[data-ui="application-form-title"]'),
        firstNameInput:()=>cy.get('[id="firstname"]'),
        lastNameInput:()=>cy.get('[id="lastname"]'),
        emailInput:()=>cy.get('[id="email"]'),
        phoneInput:()=>cy.get('[name="phone"]'),
        addressInput:()=>cy.get('[id="address"]'),
        summaryInput:()=>cy.get('[id="summary"]'),
        resumeFile:()=>cy.get('[data-role="dropzone"]'),
        resuneName:()=>cy.get('[data-id="filename"]'),
        grossSalaryInput:()=>cy.get('[name="QA_7219693"]'),
        desaireGross:()=>cy.get('[name="QA_7219694"]'),
        availabilityInput:()=>cy.get('[data-ui="QA_7219695"]'),
        optionButton:()=>cy.get('[name="QA_7219696"]').first(),
        recluterInput:()=>cy.get('[data-ui="QA_7219697"]'),
        ulRecluter:()=>cy.get('[id="input_QA_7219697_listbox"]'),
        submitButton:()=>cy.get('[data-ui="application-form-submit"]')
    }

    acceptCookies(){
        this.elements.cookiesButton().click();
    }

    clickApply(){
        this.elements.applyButton().click();
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePhone(phone){
        this.elements.phoneInput().type(phone);
    }

    typeAddress(address){
        this.elements.addressInput().type(address);
    }

    typeSummary(summary){
        this.elements.summaryInput().type(summary);
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{ action: 'drag-drop' });
    }

    typeGross(grossSalary){
        this.elements.grossSalaryInput().type(grossSalary);
    }

    typeDesaireGross(grossDesaire){
        this.elements.desaireGross().type(grossDesaire);
    }

    typeAvailability(ability){
        this.elements.availabilityInput().type(ability);
    }

    checkCountryOption(){
        this.elements.optionButton().check();
    }

    selectRecluter(){
        this.elements.recluterInput().click();
        this.elements.recluterInput().contains('No').click({force: true});

    }

    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();