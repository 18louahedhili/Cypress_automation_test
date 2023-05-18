import InscriptionPage from '../pages/InscriptionPage';

const inscriptionPage = new InscriptionPage();

class InscriptionUtilisateurSteps {


    setFormulaire(prenom,
        nom,
        date_naissance,
        address,
        country,
        city,
        code_postal,
        passport_number,
        cin,
        username,
        tel,
        password,
        passwordConfirm,
        nom_conjoint,
        prenom_conjiont,
        date_naissance_conjiont
    ) {
        if (prenom) {
            inscriptionPage.getPrenom().type(prenom)
        }

        // Fill in the last name
        if (nom) {
            inscriptionPage.getNom().type(nom)
        }
        // Fill in the date of birth
        if (date_naissance) {
            inscriptionPage.getDateNaissance().type(date_naissance)
        }
        // Fill in the address
        if (address) {
            inscriptionPage.getAdress().type(address)
        }
        // Select the country
        if (country) {
            inscriptionPage.getCurrentPays().select(country)
        }
        // Select the city
        if (city) {
            inscriptionPage.getVille().select(city)
        }
        // Fill in the postal code
        if (code_postal) {
            inscriptionPage.getCodePostal().type(code_postal)
        }
        // Fill in the passport number
        if (passport_number) {
            inscriptionPage.getPasseport().type(passport_number)
        }
        // Fill in the CIN number
        if (cin) {
            inscriptionPage.getCin().type(cin)
        }
        // Fill in the username (email)
        if (username) {
            inscriptionPage.getUsername().type(username)
        }
        // Fill in the phone number
        if (tel) {
            inscriptionPage.getTel().type(tel)
        }
        // Fill in the password
        if (password) {
            inscriptionPage.getPassword().type(password)
        }
        // Confirm the password
        if (passwordConfirm) {
            inscriptionPage.getConfirmPassword().type(passwordConfirm)
        }
        // Fill in the spouse's last name
        if (nom_conjoint) {
            inscriptionPage.getnomConjoint().type(nom_conjoint)
        }
        // Fill in the spouse's first name
        if (prenom_conjiont) {
            inscriptionPage.getPrenomConjoint().type(prenom_conjiont)
        }
        // Fill in the spouse's date of birth
        if (date_naissance_conjiont) {
            inscriptionPage.getDateNaissanceConjoint().type(date_naissance_conjiont)
        }
    }
    valider() {
        // Step 5:Click on the "Créer votre compte" button
        inscriptionPage.getButton().click()
    }
    checkError(message) {
        inscriptionPage.getError(message).should('be.visible')
    }
    createAccount() {
        // Step 1: Click on the "Vous n'avez pas de compte ? Créez-en un ici" link
        inscriptionPage.getAccountLabel().click()
    }

    checkRegisterPage() {
        // Step 2: Verify that the user is redirected to the registration page
        inscriptionPage.checkRegister()
    }

    validateParticularAccount() {
        // Step 3: Click on the "Particulier" button
        inscriptionPage.getParticularAccount().click()
    }
}

require('@cypress/xpath')
export default InscriptionUtilisateurSteps;