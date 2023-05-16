describe('User Login', () => {
  it('allows users to log in successfully with valid credentials', () => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')
    
    // Step 1: Enter username and password
    cy.get('input[formcontrolname="username"]').type('admin@test.com')
    cy.get('input[formcontrolname="password"]').type('Sogeti33')
    
    // Step 2: Click on the Login button
    cy.get('button.btn.btn-primary').click()
    
    // Expected Result: User should be successfully logged in
    cy.get('button#dropdownMenu2').should('contain', 'Bienvenue ADMIN TEST')
  })


  it('Verify that users cannot log in to the site with invalid credentials.', () => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')
    
    // Step 1: Enter username and password
    cy.get('input[formcontrolname="username"]').type('loua@test.com')
    cy.get('input[formcontrolname="password"]').type('Loua18')
    
    // Step 2: Click on the Login button
    cy.get('button.btn.btn-primary').click()
    
    // Expected Result: Display of an error message: invalid username or password.
    cy.get('div#toast-container > .ng-trigger.ng-trigger-flyInOut.ngx-toastr.toast-error')
    .should('contain', 'mot de passe ou identifiant invalide');
  })

})
  