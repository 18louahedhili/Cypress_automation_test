
************** Connexion **************

Cas de test 1: Connexion utilisateur ==> Cas passant
// Description : Vérifiez que les utilisateurs peuvent se connecter avec succès sur le site avec des identifiants valides.

// Étapes de test :
1/ Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud/login
2/ Saisir les identifiants valides dans les champs appropriés (nom d'utilisateur: admine@test.com et mot de passe:Sogeti33):
3/ Cliquer sur le bouton de connexion.
4/ Vérifier que l'URL de la page redirige vers le tableau de bord (dashboard).
5/ Vérifier que le message de bienvenue affiche le nom d'utilisateur connecté "Bienvenu ADMIN TEST".

// Prérequis :
- Avoir un compte utilisateur enregistré sur le site.
- Identifiants valides pour la connexion.
  
// Objectifs attendus :
L'utilisateur est redirigé vers le tableau de bord après la connexion.
Le message de bienvenue affiche le nom d'utilisateur connecté "Bienvenu ADMIN TEST"
-------------------------------------------------------------------------------------------------------------------------------------------

Cas de test 2: Connexion utilisateur ==> Cas non passant
Description : 
- Vérifiez que les utilisateurs ne peuvent pas se connecter sur le site avec des identifiants invalides.
- Vérifier l'affichage d'un message d'erreur: mot de passe ou identifiant invalide

// Étapes de test :
1/ Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud/login
2/ Saisir des identifiants invalides dans les champs appropriés (nom d'utilisateur et mot de passe).
3/ Cliquer sur le bouton de connexion.
4/ Vérifier que l'URL de la page reste sur la page de connexion.
5/ Vérifier que le message d'erreur "mot de passe ou identifiant invalide" est affiché.

// Prérequis :
- Avoir un compte utilisateur enregistré sur le site.
- Identifiants invalides pour la connexion.
  
// Objectifs attendus :
- L'utilisateur reste sur la page de connexion après la tentative de connexion avec des identifiants invalides.
- Un message d'erreur "mot de passe ou identifiant invalide" est affiché pour informer l'utilisateur que les identifiants sont invalides.
-------------------------------------------------------------------------------------------------------------------------------------------

************** Inscription **************

Cas de test 3: Inscription utilisateur "Particulier" Cas passant
Description : Vérifiez que les utilisateurs peuvent s'inscrire avec succès sur le site.

// Étapes de test :
1/ Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
2/ Sélectionner l'option de création de compte "Vous n'avez pas de compte ? Créez-en un ici"
3/ Vérifiez que l'utilisateur est redirigé vers la page d'inscription: https://opencruise-ok.sogeti-center.cloud/register
4/ Sélectionner l'option "Particulier".
5/ Remplir tous les champs obligatoires du formulaire d'inscription avec des données valides.
6/ Cliquer sur le bouton "Créer votre compte".

// Prérequis :Aucun prérequis 
// Objectifs attendus :
- L'utilisateur est en mesure de remplir avec succès le formulaire d'inscription en tant que "Particulier".
-------------------------------------------------------------------------------------------------------------------------------------------

Cas de test 4: Inscription utilisateur "Particulier" Cas non passant
// Description : Vérifiez que les utilisateurs ne peuvent pas s'inscrire sur le site sans remplir tout les champs obligatoires.

// Étapes de test :
1/ Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
2/ Sélectionner l'option de création de compte "Vous n'avez pas de compte ? Créez-en un ici"
3/ Vérifiez que l'utilisateur est redirigé vers la page d'inscription: https://opencruise-ok.sogeti-center.cloud/register
4/ Sélectionner l'option de création de compte pour les particuliers.
5/ Laisser au moins un champ obligatoire du formulaire d'inscription vide ou incomplet.
6/ Cliquer sur le bouton "Créer votre compte".
7/ Vérifier qu'un message d'erreur approprié s'affiche   'merci de saisir le "nom du champ manquant"'

// Prérequis :
Aucun prérequis particulier, sauf s'assurer que tous les champs obligatoires du formulaire d'inscription sont identifiés clairement.

// Objectifs attendus :
- Le système doit empêcher l'utilisateur de soumettre le formulaire d'inscription s'il y a des champs obligatoires vides ou incomplets.
- Un message d'erreur approprié doit être affiché pour indiquer à l'utilisateur de remplir tous les champs obligatoires.

-------------------------------------------------------------------------------------------------------------------------------------------


| TEST ID  | TEST NAME        | TEST DESCRIPTION / GOALS             | TEST TYPE          | PREREQUISITES            | ASSERTIONS                        |
|----------|---------------   |--------------------------------------|--------------------|--------------------------|-----------------------------------|
| JIRA-001 | Connect Admin    | Connect with valid credentials admin | Test case Positive |valid credentials admin   |User is redirected to the dashboard|
| JIRA-002 | User Login       | Login with invalid credentials       | Test case Negative |invalid credentials user  |Display of an error message        |
| JIRA-003 | User Registration| User Registration - Individual       | Test case Positive |Completed required fields |Successful registration on the site|
| JIRA-003 | User Registration| User Registration - Individual       | Test case Negative |Missing required fields   |Failed registration                |
|          |                  |                                      |                    |                          |                                   |
|          |                  |                                      |                    |                          |                                   |
