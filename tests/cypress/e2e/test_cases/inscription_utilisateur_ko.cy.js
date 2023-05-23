import InscriptionUtilisateurSteps from '../steps/Inscription_utilisateur_steps.js';
const inscriptionUtilisateurStepsKo = new InscriptionUtilisateurSteps('https://opencruise-ko.sogeti-center.cloud/register');


describe('User Registration - Professional', () => {

  beforeEach(() => {
    cy.visit('https://opencruise-ko.sogeti-center.cloud')

    inscriptionUtilisateurStepsKo.createAccount()

    inscriptionUtilisateurStepsKo.checkRegisterPage()

    inscriptionUtilisateurStepsKo.validateProfessionnelAccount()

  })

  it('bug: technical error', () => {

    // Fill in the registration form with valid professional user details
    inscriptionUtilisateurStepsKo.setFormulaire('Smith',
      'Marie',
      '1990-09-18',
      'France',
      'Canada',
      'Vancouver',
      '75002',
      '012345678',
      '0101010101',
      'Mariesmith@test.com',
      '012345678',
      'Mariesmith12345',
      'Mariesmith12345',
      '',
      '',
      '',
      'SNC',
      '1234567890000',
      '21-50'
    )
    inscriptionUtilisateurStepsKo.valider()
    inscriptionUtilisateurStepsKo.check_Popup()

  })
})


