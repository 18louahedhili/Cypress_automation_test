// Fonction de connexion utilisateur
function userLogin(username, password) {
  cy.visit('https://opencruise-ok.sogeti-center.cloud');
  cy.get('input[formcontrolname="username"]').type(username);
  cy.get('input[formcontrolname="password"]').type(password);
  cy.get('button.btn.btn-primary').click();
}

// User Login
describe('User Login', () => {
  it('allows users to log in successfully with valid credentials', () => {
    userLogin('admin@test.com', 'Sogeti33')
    cy.get('button#dropdownMenu2').should('contain', 'Bienvenue ADMIN TEST')
  });
// User Login Failed
  it('prevents users from logging in with invalid credentials', () => {
    userLogin('loua@test.com', 'Loua18')
    cy.get('div#toast-container > .ng-trigger.ng-trigger-flyInOut.ngx-toastr.toast-error')
      .should('contain', 'mot de passe ou identifiant invalide')
  })
})
