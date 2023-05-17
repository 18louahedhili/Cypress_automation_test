// Fonction de connexion utilisateur
function userLogin(username, password) {
  cy.visit('https://opencruise-ok.sogeti-center.cloud');
  cy.get('input[formcontrolname="username"]').type(username);
  cy.get('input[formcontrolname="password"]').type(password);
  cy.get('button.btn.btn-primary').click();
}

// Cas de test : Connexion utilisateur
describe('User Login', () => {
  it('allows users to log in successfully with valid credentials', () => {
    userLogin('admin@test.com', 'Sogeti33');
    cy.get('button#dropdownMenu2').should('contain', 'Bienvenue ADMIN TEST');
  });

  it('prevents users from logging in with invalid credentials', () => {
    userLogin('loua@test.com', 'Loua18');
    cy.get('div#toast-container > .ng-trigger.ng-trigger-flyInOut.ngx-toastr.toast-error')
      .should('contain', 'mot de passe ou identifiant invalide');
  });
});

// Cas de test : Inscription utilisateur - Individu
describe('User Registration - Individual', () => {
  it('allows users to register successfully on the site', () => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud');
    cy.get('a[routerlink="/register"]').contains("Vous n'avez pas de compte ? Créez-en un ici").click();
    cy.url().should('eq', 'https://opencruise-ok.sogeti-center.cloud/register');
    cy.get('input[name="type"][value="1"]').click();

    cy.get('input[formcontrolname="prenom"]:eq(0)').type('Doe');
    cy.get('input[formcontrolname="nom"]:eq(0)').type('Sarra');
    cy.get('input[formcontrolname="dateNaissance"]:eq(0)').type('1990-05-22');
    cy.get('input[formcontrolname="adresse"]:eq(0)').type('France');
    cy.get('select[formcontrolname="currentPays"]:eq(0)').select('Canada');
    cy.get('select[formcontrolname="ville"]:eq(0)').select('Vancouver');
    cy.get('input[formcontrolname="codePostal"]:eq(0)').type('75002');
    cy.get('input[formcontrolname="passport"]:eq(0)').type('012345678');
    cy.get('input[formcontrolname="cin"]:eq(0)').type('0101010101');
    cy.get('input[formcontrolname="username"]:eq(0)').type('doesarra@test.com');
    cy.get('input[formcontrolname="tel"]:eq(0)').type('012345678');
    cy.get('input[formcontrolname="password"]:eq(0)').type('Sarra12345');
    cy.get('input[formcontrolname="confirmPassword"]:eq(0)').type('Sarra12345');
    cy.get('input[formcontrolname="nomConjoint"]:eq(0)').type('Langard');
    cy.get('input[formcontrolname="prenomConjoint"]:eq(0)').type('Pierre');
    cy.get('input[formcontrolname="dateNaissanceConjoint"]:eq(0)').type('1984-08-15');

    cy.get('button.btn.btn-primary').contains('Créer votre compte').click();
  });
})
  