
class InscriptionPage {
    link = ""
    constructor(link) {
        this.link = link;
    }
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
    getProfessionnelAccount(){
        return cy.get('input[name="type"][value="0"]')
    }
    checkRegister(){
        cy.url().should('eq', this.link)
    }
    getAccountLabel(){
        return cy.get('a[routerlink="/register"]').contains('Vous n\'avez pas de compte ? Créez-en un ici')
    }
    getRaisonSocial() {
        return cy.get('select[formcontrolname="raisonSociale"]:eq(0)')
    }
    getSiret() {
        return cy.get('input[formcontrolname="siret"]:eq(0)')
    }
    getNombreSalarie() {
        return cy.get('select[formcontrolname="nombreSalarie"]:eq(0)')
    }
    checkPopup() {
        return  cy.get('div#toast-container.toast-top-right.toast-container').should('be.visible')
    }

}
require('@cypress/xpath')
export default InscriptionPage;
