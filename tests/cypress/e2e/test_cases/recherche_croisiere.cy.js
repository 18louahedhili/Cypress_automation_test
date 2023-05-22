import '@cypress/xpath';
import RechercheCroisiereSteps from '../steps/Recherche_croisiere_steps.js';
const rechercheCroisiereSteps = new RechercheCroisiereSteps();


describe('Cruise search', () => {

  beforeEach(() => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')
    rechercheCroisiereSteps.setFormulaire('admin@test.com', 'Sogeti33')
    rechercheCroisiereSteps.connexion()
    rechercheCroisiereSteps.checkConnexion()
  })
    it('the user is able to see the available cruises and download the program', () => {

    //click on the "EUROPE" button
    rechercheCroisiereSteps.europeCruise()
    //click on "learn more" button
    rechercheCroisiereSteps.readMoreCruiseEurope()
    //click on "download program" button
    rechercheCroisiereSteps.checkEuropeProgram()
    //Redirection 
    rechercheCroisiereSteps.checkRedirection()
    rechercheCroisiereSteps.checkWait()

})
  it('the user is able to see the details of the selected cruise and return to the home page', () => {
    //click on the "AMERIQUE" button
    rechercheCroisiereSteps.ameriqueCruise()
    //click on "learn more" button
    rechercheCroisiereSteps.readMoreCruiseEurope()
    //return to the home page
    rechercheCroisiereSteps.checkReturn()
    
})
  it('allows the user to fill in the search fields', () => {

    rechercheCroisiereSteps.MorrocoCruises();
    
    rechercheCroisiereSteps.selectDepartureDate();
    
    rechercheCroisiereSteps.selectArrivalDate();
    
    rechercheCroisiereSteps.searchClick();

    rechercheCroisiereSteps.readMoreCruiseMaroc();

    rechercheCroisiereSteps.checkReturn();

})
})
