import ConnexionUtilisateurSteps from '../steps/Connexion_utilisateur_steps.js';
const connexionUtilisateurSteps = new ConnexionUtilisateurSteps();

describe('User Login', () => {

  beforeEach(() => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')

  })
  // User Login
  it('allows users to log in successfully with valid credentials', () => {
    connexionUtilisateurSteps.setFormulaire('admin@test.com', 'Sogeti33')
    connexionUtilisateurSteps.connexion()
    connexionUtilisateurSteps.checkConnexion()

  })
  // User Login Failed
  it('prevents users from logging in with invalid credentials', () => {
    connexionUtilisateurSteps.setFormulaire('loua@test.com', 'Loua18')
    connexionUtilisateurSteps.connexion()
    // Step 5:Assert that an error message is displayed indicating the missing field
    connexionUtilisateurSteps.checkError('mot de passe ou identifiant invalide')

  })
})


