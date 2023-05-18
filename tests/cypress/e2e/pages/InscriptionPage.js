
class InscriptionPage {

    getPrenom() {
        return cy.get('input[formcontrolname="nom"]:eq(0)')
    }
    getNom() {
        return cy.get('input[formcontrolname="prenom"]:eq(0)')
    }
    getDateNaissance() {
        return cy.get('input[formcontrolname="dateNaissance"]:eq(0)')
    }
    getAdress() {
        return cy.get('input[formcontrolname="adresse"]:eq(0)')
    }
    getCurrentPays() {
        return cy.get('select[formcontrolname="currentPays"]:eq(0)')
    }
    getVille() {
        return cy.get('select[formcontrolname="ville"]:eq(0)')
    }
    getCodePostal() {
        return cy.get('input[formcontrolname="codePostal"]:eq(0)')
    }
    getPasseport() {
        return cy.get('input[formcontrolname="passport"]:eq(0)')
    }
    getCin() {
        return cy.get('input[formcontrolname="cin"]:eq(0)')
    }
    getUsername() {
        return cy.get('input[formcontrolname="username"]:eq(0)')
    }
    getTel() {
        return cy.get('input[formcontrolname="tel"]:eq(0)')
    }
    getPassword() {
        return cy.get('input[formcontrolname="password"]:eq(0)')
    }
    getConfirmPassword() {
        return cy.get('input[formcontrolname="confirmPassword"]:eq(0)')
    }
    getnomConjoint() {
        return cy.get('input[formcontrolname="nomConjoint"]:eq(0)')
    }
    getPrenomConjoint() {
        return cy.get('input[formcontrolname="prenomConjoint"]:eq(0)')
    }
    getDateNaissanceConjoint() {
        return cy.get('input[formcontrolname="dateNaissanceConjoint"]:eq(0)')
    }
    getButton() {
        return cy.get('button.btn.btn-primary').contains('Créer votre compte')
    }
    getError(message){
        return cy.contains(message)
    }
    getParticularAccount() {
        return cy.get('input[name="type"][value="1"]')
    }
    checkRegister(){
        cy.url().should('eq', 'https://opencruise-ok.sogeti-center.cloud/register')
    }

    getAccountLabel(){
        return cy.get('a[routerlink="/register"]').contains('Vous n\'avez pas de compte ? Créez-en un ici')
    }
}
require('@cypress/xpath')
export default InscriptionPage;
