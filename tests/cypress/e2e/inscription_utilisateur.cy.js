describe('User Registration - Individual', () => {
  it('allows users to register successfully on the site', () => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud/register')

    // Step 1: Click on the "Particulier" button
    cy.get('input[name="type"][value="1"]').click()

    
    // Step 2: Fill in the registration form with valid user details

    // Fill in the first name
    cy.get('input[formcontrolname="prenom"]:eq(0)').type('Doe')

    // Fill in the last name
    cy.get('input[formcontrolname="nom"]:eq(0)').type('Sarra')

    // Fill in the date of birth
    cy.get('input[formcontrolname="dateNaissance"]:eq(0)').type('1990-05-22')

    // Fill in the address
    cy.get('input[formcontrolname="adresse"]:eq(0)').type('France')

    // Select the country
    cy.get('select[formcontrolname="currentPays"]:eq(0)').select('Canada')

    // Select the city
    cy.get('select[formcontrolname="ville"]:eq(0)').select('Vancouver')

    // Fill in the postal code
    cy.get('input[formcontrolname="codePostal"]:eq(0)').type('75002')

    // Fill in the passport number
    cy.get('input[formcontrolname="passport"]:eq(0)').type('012345678')

    // Fill in the CIN number
    cy.get('input[formcontrolname="cin"]:eq(0)').type('0101010101')

    // Fill in the username (email)
    cy.get('input[formcontrolname="username"]:eq(0)').type('pierrelangard@test.com')

    // Fill in the phone number
    cy.get('input[formcontrolname="tel"]:eq(0)').type('012345678')

    // Fill in the password
    cy.get('input[formcontrolname="password"]:eq(0)').type('Pierre12345')

    // Confirm the password
    cy.get('input[formcontrolname="confirmPassword"]:eq(0)').type('Pierre12345')

    // Fill in the spouse's last name
    cy.get('input[formcontrolname="nomConjoint"]:eq(0)').type('Langard')

    // Fill in the spouse's first name
    cy.get('input[formcontrolname="prenomConjoint"]:eq(0)').type('Pierre')

    // Fill in the spouse's date of birth
    cy.get('input[formcontrolname="dateNaissanceConjoint"]:eq(0)').type('1984-08-15')

    // Click on the "Créer votre compte" button
    cy.get('button.btn.btn-primary').contains('Créer votre compte').click()

    })



    it('prevents users from registering without filling in all required fields', () => {
      cy.visit('https://opencruise-ok.sogeti-center.cloud/register')

      // Step 1: Click on the "Particulier" button
    cy.get('input[name="type"][value="1"]').click()

    
    // Step 2: Fill in the registration form with valid user details

    // Fill in the first name
    cy.get('input[formcontrolname="prenom"]:eq(0)').type('Smith')

    // Fill in the last name
    cy.get('input[formcontrolname="nom"]:eq(0)').type('Olivier')

    // Fill in the date of birth
    cy.get('input[formcontrolname="dateNaissance"]:eq(0)').type('1990-05-22')

    // Fill in the address
    cy.get('input[formcontrolname="adresse"]:eq(0)').type('France')

    // Select the country
    cy.get('select[formcontrolname="currentPays"]:eq(0)').select('Canada')

    // Select the city
    cy.get('select[formcontrolname="ville"]:eq(0)').select('Vancouver')

    // Fill in the postal code
    cy.get('input[formcontrolname="codePostal"]:eq(0)').type('75014')

    // Fill in the passport number
    cy.get('input[formcontrolname="passport"]:eq(0)').type('0123456789')

    // Fill in the CIN number
    cy.get('input[formcontrolname="cin"]:eq(0)').type('0202020202')

    // Fill in the username (email)
    cy.get('input[formcontrolname="username"]:eq(0)').type('olivier@test.com')

    // Do not fill in the phone number field
    //--------------------------------------

    // Fill in the password
    cy.get('input[formcontrolname="password"]:eq(0)').type('Olivier12345')

    // Confirm the password
    cy.get('input[formcontrolname="confirmPassword"]:eq(0)').type('Olivier12345')

    // Click on the "Créer votre compte" button
    cy.get('button.btn.btn-primary').contains('Créer votre compte').click()

    // Assert that an error message is displayed indicating the missing field
    cy.contains('merci de saisir le téléphone').should('be.visible')
  
  })
})