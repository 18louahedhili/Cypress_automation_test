class RecherchePage {

    getUsername() {
        return cy.get('input[formcontrolname="username"]');
    }
    getPassword() {
        return cy.get('input[formcontrolname="password"]');
    }
    getButtonConnexion() {
        return cy.get('button.btn.btn-primary');
    }
    checkConnexion(){
        return cy.get('button#dropdownMenu2').should('contain', 'Bienvenue ADMIN TEST');
    }
    getEuropeClick(){
        return cy.get('#pills-profile-tab').contains('EUROPE');
    }
    getAmeriqueClick(){
        return cy.get('li:nth-of-type(2) > a#pills-profile-tab').contains('AMERIQUE');
    }
    getReadMoreEurope(){
        return cy.get('div:nth-of-type(1) > .content-thumbnail > .btn.btn-thumbnail');
    }
    getReadMoreAmerique(){
        return cy.get('.btn.btn-thumbnail');
    }

    getDownloadProgramClick(){
        return cy.get('.btn.btn-thumbnail');
    }
    getRedirect(){
        return cy.intercept('GET', 'https://opencruise-ok.sogeti-center.cloud/api/helper/brochure/2').as('redirection');
    }
    getWait(){
        return cy.wait(2000);
    }
    goToHomePage() {
        return cy.get('.breadcrumb  a').contains('Retour à la page d’accueil');
    }
    getcruiseToMorocco(){
        return cy.get('input[name="searchDescription"]');
    }
    getdepartureDate(){
        return cy.get('input[name="dp1"]')
    }
    getarrivalDate(){
        return cy.get('input[name="dp2"]')
    }
    getSearchClick(){
        return cy.get('a.btn.btn-primary.btn-block').contains('Rechercher')
    }
    getReadMoreMaroc(){
        return cy.get('.btn.btn-thumbnail');
    }
}
require('@cypress/xpath')
export default RecherchePage;

