import InscriptionUtilisateurSteps from '../steps/Inscription_utilisateur_steps.js';
const inscriptionUtilisateurStepsOk = new InscriptionUtilisateurSteps('https://opencruise-ok.sogeti-center.cloud/register');


describe('User Registration - Individual', () => {

  beforeEach(() => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud')

    inscriptionUtilisateurStepsOk.createAccount()

    inscriptionUtilisateurStepsOk.checkRegisterPage()

    inscriptionUtilisateurStepsOk.validateParticularAccount()

  })

  it('allows users to register successfully on the site', () => {

    // Fill in the registration form with valid user details
    inscriptionUtilisateurStepsOk.setFormulaire('Doe',
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
    inscriptionUtilisateurStepsOk.valider()

  })

  it('prevents users from registering without filling in all required fields', () => {

    inscriptionUtilisateurStepsOk.setFormulaire('Smith',
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
    inscriptionUtilisateurStepsOk.valider()
    //Assert that an error message is displayed indicating the missing field
    inscriptionUtilisateurStepsOk.checkError('merci de saisir le téléphone')
  })

  it('prevents users from registering without confirmation his password', () => {

    inscriptionUtilisateurStepsOk.setFormulaire('Smith',
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
    inscriptionUtilisateurStepsOk.valider()
    //Assert that an error message is displayed indicating that the passwords must be identical
    inscriptionUtilisateurStepsOk.checkError('les mots de passe doivent être identiques')
  })

  it('prevents users from registering without typing informations', () => {

    inscriptionUtilisateurStepsOk.setFormulaire('',
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
    inscriptionUtilisateurStepsOk.valider()
    //Assert that an error message is displayed indicating the missing field
    inscriptionUtilisateurStepsOk.checkError('merci de saisir votre prénom')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir votre nom')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir la date de naissance')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir votre adresse')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir le Pays')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir la ville')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir le code postal')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir le numéro de passeport')
    inscriptionUtilisateurStepsOk.checkError('merci de saisir le Numéro de carte d’identité')
  })

})


