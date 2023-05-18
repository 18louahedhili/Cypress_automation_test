class ConnexionPage {

    getUsername() {
        return cy.get('input[formcontrolname="username"]')
    }
    getPassword() {
        return cy.get('input[formcontrolname="password"]')
    }
    getButtonConnexion() {
        return cy.get('button.btn.btn-primary')
    }
    getError(message){
        return cy.contains(message)
    }
    checkConnexion(){
        return cy.get('button#dropdownMenu2').should('contain', 'Bienvenue ADMIN TEST')
    }

}
require('@cypress/xpath')
export default ConnexionPage;