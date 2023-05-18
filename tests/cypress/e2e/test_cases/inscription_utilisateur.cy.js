import InscriptionUtilisateurSteps from '../steps/Inscription_utilisateur_steps.js';
const inscriptionUtilisateurSteps = new InscriptionUtilisateurSteps();


describe('User Registration - Individual', () => {

  beforeEach(() => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')

    inscriptionUtilisateurSteps.createAccount()

    inscriptionUtilisateurSteps.checkRegisterPage()

    inscriptionUtilisateurSteps.validateParticularAccount()

  })

  it('allows users to register successfully on the site', () => {

    // Step 4: Fill in the registration form with valid user details
    // Fill in the first name
    inscriptionUtilisateurSteps.setFormulaire('Doe',
      'Sarra',
      '1990-05-22',
      'France',
      'Canada',
      'Vancouver',
      '75002',
      '012345678',
      '0101010101',
      'doesarra@test.com',
      '012345678',
      'Sarra12345',
      'Sarra12345',
      'Langard',
      'Pierre',
      '1984-08-15'
    )
    inscriptionUtilisateurSteps.valider()

  })

  it('prevents users from registering without filling in all required fields', () => {

    inscriptionUtilisateurSteps.setFormulaire('Smith',
      'Olivier',
      '1990-05-22',
      'France',
      'Canada',
      'Vancouver',
      '75014',
      '0123456789',
      '0202020202',
      'olivier@test.com',
      '',
      'Olivier12345',
      'Olivier12345',
      '',
      '',
      ''
    )
    inscriptionUtilisateurSteps.valider()
    // Step 5:Assert that an error message is displayed indicating the missing field
    inscriptionUtilisateurSteps.checkError('merci de saisir le téléphone')
  })

  it('prevents users from registering without confirmation his password', () => {

    inscriptionUtilisateurSteps.setFormulaire('Smith',
      'Olivier',
      '1990-05-22',
      'France',
      'Canada',
      'Vancouver',
      '75014',
      '0123456789',
      '0202020202',
      'olivier@test.com',
      '0606060606',
      'Olivier12345',
      'Olivier1234',
      '',
      '',
      ''
    )
    inscriptionUtilisateurSteps.valider()
    // Step 5:Assert that an error message is displayed indicating the missing field
    inscriptionUtilisateurSteps.checkError('les mots de passe doivent être identiques')
  })

  it('prevents users from registering without typing informations', () => {

    inscriptionUtilisateurSteps.setFormulaire('',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    )
    inscriptionUtilisateurSteps.valider()
    // Step 5:Assert that an error message is displayed indicating the missing field
    inscriptionUtilisateurSteps.checkError('merci de saisir votre prénom')
    inscriptionUtilisateurSteps.checkError('merci de saisir votre nom')
    inscriptionUtilisateurSteps.checkError('merci de saisir la date de naissance')
    inscriptionUtilisateurSteps.checkError('merci de saisir votre adresse')
    inscriptionUtilisateurSteps.checkError('merci de saisir le Pays')
    inscriptionUtilisateurSteps.checkError('merci de saisir la ville')
    inscriptionUtilisateurSteps.checkError('merci de saisir le code postal')
    inscriptionUtilisateurSteps.checkError('merci de saisir le numéro de passeport')
    inscriptionUtilisateurSteps.checkError('merci de saisir le Numéro de carte d’identité')
  })

})