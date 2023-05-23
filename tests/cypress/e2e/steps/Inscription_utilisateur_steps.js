import InscriptionPage from '../pages/InscriptionPage';


class InscriptionUtilisateurSteps {

    inscriptionPage
    constructor(link) {
        this.inscriptionPage = new InscriptionPage(link);
    }
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
        prenom_conjoint,
        date_naissance_conjoint,
        raisonSociale,
        siret,
        nombreSalarie
    ) {
        if (prenom) {
            this.inscriptionPage.getPrenom().type(prenom)
        }

        // Fill in the last name
        if (nom) {
            this.inscriptionPage.getNom().type(nom)
        }
        // Fill in the date of birth
        if (date_naissance) {
            this.inscriptionPage.getDateNaissance().type(date_naissance)
        }
        // Fill in the address
        if (address) {
            this.inscriptionPage.getAdress().type(address)
        }
        // Select the country
        if (country) {
            this.inscriptionPage.getCurrentPays().select(country)
        }
        // Select the city
        if (city) {
            this.inscriptionPage.getVille().select(city)
        }
        // Fill in the postal code
        if (code_postal) {
            this.inscriptionPage.getCodePostal().type(code_postal)
        }
        // Fill in the passport number
        if (passport_number) {
            this.inscriptionPage.getPasseport().type(passport_number)
        }
        // Fill in the CIN number
        if (cin) {
            this.inscriptionPage.getCin().type(cin)
        }
        // Fill in the username (email)
        if (username) {
            this.inscriptionPage.getUsername().type(username)
        }
        // Fill in the phone number
        if (tel) {
            this.inscriptionPage.getTel().type(tel)
        }
        // Fill in the password
        if (password) {
            this.inscriptionPage.getPassword().type(password)
        }
        // Confirm the password
        if (passwordConfirm) {
            this.inscriptionPage.getConfirmPassword().type(passwordConfirm)
        }
        // Fill in the spouse's last name
        if (nom_conjoint) {
            this.inscriptionPage.getnomConjoint().type(nom_conjoint)
        }
        // Fill in the spouse's first name
        if (prenom_conjoint) {
            this.inscriptionPage.getPrenomConjoint().type(prenom_conjoint)
        }
        // Fill in the spouse's date of birth
        if (date_naissance_conjoint) {
            this.inscriptionPage.getDateNaissanceConjoint().type(date_naissance_conjoint)
        }
        
        if (raisonSociale) {
            this.inscriptionPage.getRaisonSocial().select('SNC')
        }
        if (siret) {
            this.inscriptionPage.getSiret().type('1234567890000')
        }
        if (nombreSalarie) {
            this.inscriptionPage.getNombreSalarie().select('21-50')
        }
    
    }
    valider() {
        //Click on the "Créer votre compte" button
        this.inscriptionPage.getButton().click()
    }
    checkError(message) {
        this.inscriptionPage.getError(message).should('be.visible')
    }
    createAccount() {
        //Click on the "Vous n'avez pas de compte ? Créez-en un ici" link
        this.inscriptionPage.getAccountLabel().click()
    }
    checkRegisterPage() {
        //Verify that the user is redirected to the registration page
        this.inscriptionPage.checkRegister()
    }
    validateParticularAccount() {
        //Click on the "Particulier" button
        this.inscriptionPage.getParticularAccount().click()
    }
    validateProfessionnelAccount() {
        //Click on the "Professionnel" button
        this.inscriptionPage.getProfessionnelAccount().click()
    }
    check_Popup(){
        this.inscriptionPage.checkPopup()
    }
}

require('@cypress/xpath')
export default InscriptionUtilisateurSteps;