
|TEST ID| TEST NAME        | TEST DESCRIPTION / GOALS             | TEST TYPE          | PREREQUISITES            | ASSERTIONS                              |
|-------|------------------|--------------------------------------|--------------------|--------------------------|-----------------------------------------|
| 001   | Connect Admin    | Connect with valid credentials admin | Test case Positive |valid credentials admin   |User is redirected to the dashboard      |
| 002   | User Login       | Login with invalid credentials       | Test case Negative |invalid credentials user  |Display of an error message              |
| 003   | User Login       | Login with empty credentials         | Test case Negative |-                         |Login Failed/error message               |
| 004   | User Registration| User Registration - Individual       | Test case Positive |Completed required fields |Successful registration on the site      |
| 005   | User Registration| Missing required fields              | Test case Negative |required fields identified|Failed registration/ Error Message       |
| 006   | User Registration| Missing password confirmation        | Test case Negative |valid credentials         |Failed registration/Error Message        |
| 007   | User Registration| register without typing informations | Test case Negative |valid credentials         |Failed registration/Error Message        |
| 008   | search cruise    | select cruise/download program       | Test case Positive |valid user account        |cruise selected and program downloaded   |
| 009   | search cruise    | select cruise/return to home page    | Test case Positive |valid user account        |select cruise and return to homepage     |
| 010   | search cruise    | Search cruises by specific criteria  | Test case Positive |valid user account        |research conducted/return to homepage    |
| 011   | User Registration| 'User Registration - Professional'   | Bug                |Completed required fields |bug: technical error/Failed registration |

************** Connexion **************

Cas de test 1: Connexion utilisateur ==> Cas passant
// Description : 
- Vérifiez que les utilisateurs peuvent se connecter avec succès sur le site avec des identifiants valides.

// Étapes de test :
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud/login
- Saisir les identifiants valides dans les champs appropriés (nom d'utilisateur: admine@test.com et mot de passe:Sogeti33):
- Cliquer sur le bouton de connexion.
- Vérifier que l'URL de la page redirige vers le tableau de bord (dashboard).
- Vérifier que le message de bienvenue affiche le nom d'utilisateur connecté "Bienvenu ADMIN TEST".

// Prérequis :
- Avoir un compte utilisateur enregistré sur le site.
- Identifiants valides pour la connexion.
  
// Objectifs attendus :
- L'utilisateur est redirigé vers le tableau de bord après la connexion.
- Le message de bienvenue affiche le nom d'utilisateur connecté "Bienvenu ADMIN TEST"
-------------------------------------------------------------------------------------------------------------------------------------------

Cas de test 2: Connexion utilisateur ==> Cas non passant
Description : 
- Vérifiez que les utilisateurs ne peuvent pas se connecter sur le site avec des identifiants invalides.
- Vérifier l'affichage d'un message d'erreur: mot de passe ou identifiant invalide

// Étapes de test :
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud/login
- Saisir des identifiants invalides dans les champs appropriés (nom d'utilisateur et mot de passe).
- Cliquer sur le bouton de connexion.
- Vérifier que l'URL de la page reste sur la page de connexion.
- Vérifier que le message d'erreur "mot de passe ou identifiant invalide" est affiché.

// Prérequis :
- Avoir un compte utilisateur enregistré sur le site.
- Identifiants invalides pour la connexion.
  
// Objectifs attendus :
- L'utilisateur reste sur la page de connexion après la tentative de connexion avec des identifiants invalides.
- Un message d'erreur "mot de passe ou identifiant invalide" est affiché pour informer l'utilisateur que les identifiants sont invalides.
-------------------------------------------------------------------------------------------------------------------------------------------
Cas de test 3: Connexion utilisateur - Cas non passant

//Description:
- Vérifiez que les utilisateurs ne peuvent pas se connecter avec succès sur le site sans avoir entré les identifiants.

// Étapes de test :
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud/login
- Saisir des identifiants invalides dans les champs appropriés (nom d'utilisateur et mot de passe).
- Cliquer sur le bouton de connexion.
- Vérifier que l'URL de la page reste sur la page de connexion.
- Vérifier que les messages d'erreur "Merci de renseigner votre identifiant/Merci de renseigner votre mot de passe" sont affichés.

// Prérequis:
- Avoir accès à l'internet.
- Avoir un compte utilisateur existant sur le site.
  
// Résultats attendus:
- Lorsque les identifiants ne sont pas entrés et que le bouton de connexion est cliqué, un message d'erreur approprié doit être affiché.
- L'utilisateur doit rester sur la page de connexion sans être connecté.
-------------------------------------------------------------------------------------------------------------------------------------------
************** Inscription **************

Cas de test 4: Inscription utilisateur "Particulier" Cas passant
Description : 
- Vérifiez que les utilisateurs peuvent s'inscrire avec succès sur le site.

// Étapes de test :
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
- Sélectionner l'option de création de compte "Vous n'avez pas de compte ? Créez-en un ici"
- Vérifiez que l'utilisateur est redirigé vers la page d'inscription: https://opencruise-ok.sogeti-center.cloud/register
- Sélectionner l'option "Particulier".
- Remplir tous les champs obligatoires du formulaire d'inscription avec des données valides.
- Cliquer sur le bouton "Créer votre compte".

// Prérequis :
- Aucun prérequis 

// Résultats attendus: :
- L'utilisateur est en mesure de remplir avec succès le formulaire d'inscription en tant que "Particulier".
-------------------------------------------------------------------------------------------------------------------------------------------

Cas de test 5: Inscription utilisateur "Particulier" Cas non passant
// Description : 
- Vérifiez que les utilisateurs ne peuvent pas s'inscrire sur le site sans remplir tout les champs obligatoires.

// Étapes de test :
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
- Sélectionner l'option de création de compte "Vous n'avez pas de compte ? Créez-en un ici"
- Vérifiez que l'utilisateur est redirigé vers la page d'inscription: https://opencruise-ok.sogeti-center.cloud/register
- Sélectionner l'option de création de compte pour les particuliers.
- Laisser au moins un champ obligatoire du formulaire d'inscription vide ou incomplet.
- Cliquer sur le bouton "Créer votre compte".
- Vérifier qu'un message d'erreur approprié s'affiche   'merci de saisir le "nom du champ manquant"'

// Prérequis :
- Aucun prérequis particulier, sauf s'assurer que tous les champs obligatoires du formulaire d'inscription sont identifiés clairement.

// Résultats attendus: :
- Le système doit empêcher l'utilisateur de soumettre le formulaire d'inscription s'il y a des champs obligatoires vides ou incomplets.
- Un message d'erreur approprié doit être affiché pour indiquer à l'utilisateur de remplir tous les champs obligatoires.

-------------------------------------------------------------------------------------------------------------------------------------------
Cas de test 6: Inscription utilisateur "Particulier" - Cas non passant

// Description:
- Vérifiez que les utilisateurs ne peuvent pas s'inscrire sur le site sans confirmer leur mot de passe.

// Étapes de test:

- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
- Sélectionner l'option de création de compte "Vous n'avez pas de compte ? Créez-en un ici"
- Vérifier que la page d'inscription est chargée avec succès: https://opencruise-ok.sogeti-center.cloud/register.
- Sélectionner l'option de création de compte pour les particuliers.
- Remplir tous les champs obligatoires du formulaire d'inscription
- Ne pas saisir la même valeur dans le champ de confirmation du mot de passe que celle saisie dans le champ du mot de passe.
- Cliquer sur le bouton "Créer votre compte".
- Vérifier si un message d'erreur approprié est affiché indiquant que les mots de passe ne correspondent pas"'les mots de passe doivent être identiques'".

// Prérequis:
- Avoir accès à l'internet.
  
// Résultats attendus:
- Lorsque la confirmation du mot de passe n'est pas saisie ou que les mots de passe ne correspondent pas, un message d'erreur approprié doit être affiché.
- L'utilisateur ne doit pas être inscrit avec succès sur le site.
- L'utilisateur doit rester sur la page d'inscription pour corriger les erreurs et soumettre le formulaire à nouveau.
-------------------------------------------------------------------------------------------------------------------------------------------
Cas de test 7: Inscription utilisateur "Particulier" - Cas non passant

// Description:
- Vérifiez que les utilisateurs ne peuvent pas s'inscrire sur le site sans renseigner aucune donnée dans le formulaire d'inscription.

// Étapes de test:
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
- Sélectionner l'option de création de compte "Vous n'avez pas de compte ? Créez-en un ici"
- Vérifier que la page d'inscription est chargée avec succès: https://opencruise-ok.sogeti-center.cloud/register.
- Sélectionner l'option de création de compte pour les particuliers.
- Cliquer sur le bouton d'inscription sans renseigner aucune donnée dans les champs du formulaire d'inscription.
- Vérifier si des messages d'erreur appropriés sont affichés pour indiquer que les champs obligatoires sont requis.

// Prérequis:
Avoir accès à l'internet.

// Résultats attendus:
- Lorsque les utilisateurs tentent de s'inscrire sans renseigner aucune donnée, des messages d'erreur appropriés doivent être affichés pour indiquer que les champs obligatoires sont requis.
- Les utilisateurs ne doivent pas être inscrits avec succès sur le site.
- Les utilisateurs doivent rester sur la page d'inscription pour corriger les erreurs et soumettre le formulaire à nouveau.
-------------------------------------------------------------------------------------------------------------------------------------------

************** Recherche **************

Cas de test 8: Recherche Croisiere - Cas passant

// Description:
- Vérifiez que l'utilisateur est capable de voir les croisières disponibles et de télécharger le programme.

// Étapes de test:
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
- Saisir les identifiants valides dans les champs appropriés (nom d'utilisateur: admine@test.com et mot de passe:Sogeti33):
- Cliquer sur le bouton de connexion.
- Vérifier que l'URL de la page redirige vers le tableau de bord (dashboard).
- Selectionner des croisières par continent.
- Vérifier que les croisières sont affichées avec les informations pertinentes.
- Sélectionner une croisière spécifique pour en savoir plus.
- Cliquer sur le bouton de téléchargement du programme de la croisière.
- Vérifier que le programme de la croisière est téléchargé avec succès.

// Prérequis:
- Avoir accès à l'internet.
- Disposer d'un compte utilisateur valide pour se connecter.

Résultats attendus:
- Après s'être connecté avec succès, l'utilisateur doit être redirigé vers le tableau de bord où les croisières disponibles sont affichées.
- L'utilisateur doit être en mesure de voir les croisières disponibles avec les informations pertinentes.
- L'utilisateur doit être en mesure de sélectionner une croisière spécifique et de télécharger son programme avec succès.
-------------------------------------------------------------------------------------------------------------------------------------------
Cas de test 9: Recherche Croisiere - Cas passant

// Description:
- Vérifiez que l'utilisateur peut consulter les détails de la croisière sélectionnée et revenir à la page d'accueil.

// Étapes de test:
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud.
- Saisir les identifiants valides dans les champs appropriés (nom d'utilisateur: admine@test.com et mot de passe:Sogeti33):.
- Cliquer sur le bouton de connexion.
- Vérifier que l'URL de la page redirige vers le tableau de bord (dashboard).
- Selectionner des croisières par continent.
- Vérifier que les croisières sont affichées avec les informations pertinentes.
- Sélectionner une croisière spécifique pour en savoir plus.
- Cliquer sur le bouton "Retour à la page d'accueil".
- Vérifier que l'URL de la page redirige vers la page d'accueil du site.

// Prérequis:
- Avoir accès à l'internet.
- Disposer d'un compte utilisateur valide pour se connecter.
  
// Résultats attendus:
- Après s'être connecté avec succès, l'utilisateur doit être redirigé vers le tableau de bord où les croisières disponibles sont affichées.
- L'utilisateur doit être en mesure de rechercher et de filtrer les croisières en fonction de destination.
- L'utilisateur doit être en mesure de sélectionner une croisière spécifique pour consulter ses détails.
- Les détails de la croisière sélectionnée doivent être affichés de manière complète et précise.
- L'utilisateur doit être en mesure de revenir à la page d'accueil du site.
-------------------------------------------------------------------------------------------------------------------------------------------
Cas de test 10: Recherche Croisiere - Cas passant

// Description:
- Vérifiez que l'utilisateur est capable de voir les croisières disponibles et de revenir à la page d'accueil.

// Étapes de test:
- Accéder à la page de connexion du site: https://opencruise-ok.sogeti-center.cloud
- Saisir les identifiants valides dans les champs appropriés (nom d'utilisateur: admine@test.com et mot de passe:Sogeti33):
- Cliquer sur le bouton de connexion.
- Vérifier que l'URL de la page redirige vers le tableau de bord (dashboard).
- Rechercher des croisières par destination/date d'arrivé et de retour/durée.
- Vérifier que les croisières sont affichées avec les informations pertinentes.
- Sélectionner une croisière spécifique pour en savoir plus.
- Cliquer sur le bouton "Retour à la page d'accueil".
- Vérifier que l'URL de la page redirige vers la page d'accueil du site.

// Prérequis:
- Avoir accès à l'internet.
- Disposer d'un compte utilisateur valide pour se connecter.
  
// Résultats attendus:
- Après s'être connecté avec succès, l'utilisateur doit être redirigé vers le tableau de bord où les croisières disponibles sont affichées.
- L'utilisateur doit être en mesure de rechercher et de filtrer les croisières en fonction de différents critères.
- L'utilisateur doit être en mesure de sélectionner une croisière spécifique pour consulter ses détails.
- Les détails de la croisière sélectionnée doivent être affichés de manière complète et précise.
- L'utilisateur doit être en mesure de revenir à la page d'accueil du site en utilisant un bouton ou un lien approprié.
- L'URL de la page doit être redirigée vers la page d'accueil du site.
-------------------------------------------------------------------------------------------------------------------------------------------
