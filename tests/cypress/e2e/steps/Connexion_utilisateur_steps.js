import ConnexionPage from '../pages/ConnexionPage';

const connexionPage = new ConnexionPage();

class ConnexionUtilisateurSteps {
    setFormulaire(username,
        password) {
        if (username) {
            connexionPage.getUsername().type(username)
        }
        if (password) {
            connexionPage.getPassword().type(password)
        }
    }
    connexion() {
        connexionPage.getButtonConnexion().click()
    }
    checkError(message) {
        connexionPage.getError(message).should('be.visible')
    }
    checkConnexion() {
        connexionPage.checkConnexion()
      }
}



require('@cypress/xpath')
export default ConnexionUtilisateurSteps;