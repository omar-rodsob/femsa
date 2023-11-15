import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';

describe('template spec', () => {
  it('passes', () => {
   cy.visit('');
   cy.wait(3000);
   SpecPage.acceptCookies();
   SpecPage.clickApply();
   SpecPage.elements.applicationTitle().contains('Apply for Middle QA Funcional');
   SpecPage.typeFirstName(user.firstName);
   SpecPage.typeLastName(user.lastName);
   SpecPage.typeEmail(user.email);
   SpecPage.typePhone(user.phone);
   SpecPage.typeAddress(user.location);
   SpecPage.typeSummary(user.cLetter);
   SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
   cy.wait(3000);
   SpecPage.elements.resuneName().contains('OmarRodriguez-Resume.pdf');
   SpecPage.typeGross(user.salary);
   SpecPage.typeDesaireGross(user.salaryD);
   SpecPage.typeAvailability(user.notice);
   SpecPage.checkCountryOption();
   SpecPage.selectRecluter();
   SpecPage.clickSubmit();
  })
})