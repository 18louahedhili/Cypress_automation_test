import RecherchePage from '../pages/RecherchePage';

const recherchePage = new RecherchePage();

class RechercheCroisiereSteps {
    setFormulaire(username,
        password) {
        if (username) {
            recherchePage.getUsername().type(username)
        }
        if (password) {
            recherchePage.getPassword().type(password)
        }
    }
    connexion() {
        recherchePage.getButtonConnexion().click()
    }
    checkConnexion() {
        recherchePage.checkConnexion()
    }
    europeCruise() {
        recherchePage.getEuropeClick().click()
    }
    ameriqueCruise() {
        recherchePage.getAmeriqueClick().click()
    }
    readMoreCruiseEurope() {
        recherchePage.getReadMoreEurope().click();
    }
    readMoreCruiseAmerique() {
        recherchePage.getReadMoreAmerique().click();
    }
    checkEuropeProgram() {
        recherchePage.getDownloadProgramClick().click();
    }
    checkRedirection() {
        recherchePage.getRedirect();
    }
    checkWait() {
        recherchePage.getWait();
    }
    checkReturn() {
        recherchePage.goToHomePage().click();
    }
    MorrocoCruises(){
        recherchePage.getcruiseToMorocco().type('Maroc');
    }
    selectDepartureDate(){
        recherchePage.getdepartureDate().type('2023-05-24');
    }
    selectArrivalDate(){
        recherchePage.getarrivalDate().type('2023-07-24');
    }
    searchClick(){
        recherchePage.getSearchClick().click();
    }
    readMoreCruiseMaroc() {
        recherchePage.getReadMoreMaroc().click({ multiple: false });
    }



}
require('@cypress/xpath')
export default RechercheCroisiereSteps;