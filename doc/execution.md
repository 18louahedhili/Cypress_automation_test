

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.12.0                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v18.16.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          4 found (connexion_utilisateur.cy.js, inscription_utilisateur.cy.js, inscripti │
  │                 on_utilisateur_ko.cy.js, recherche_croisiere.cy.js)                            │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  connexion_utilisateur.cy.js                                                     (1 of 4)


  User Login
    √ allows users to log in successfully with valid credentials (2788ms)
    √ prevents users from logging in with invalid credentials (1558ms)
    √ prevents users from logging without credentials (636ms)


  3 passing (7s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     connexion_utilisateur.cy.js                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 2 seconds                                                  

  -  Video output: C:\Users\Lily\Desktop\Testing\TESTFACTORY\workspace\cypress\cypress\projet_tutore_web_loua_hedhili\tests\cypress\videos\connexion_utilisateur.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  inscription_utilisateur.cy.js                                                   (2 of 4)


  User Registration - Individual
    √ allows users to register successfully on the site (10712ms)
    √ prevents users from registering without filling in all required fields (5367ms)
    √ prevents users from registering without confirmation his password (4629ms)
    √ prevents users from registering without typing informations (1070ms)


  4 passing (25s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     24 seconds                                                                       │
  │ Spec Ran:     inscription_utilisateur.cy.js                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 8 seconds                                                  

  -  Video output: C:\Users\Lily\Desktop\Testing\TESTFACTORY\workspace\cypress\cypress\projet_tutore_web_loua_hedhili\tests\cypress\videos\inscription_utilisateur.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  inscription_utilisateur_ko.cy.js                                                (3 of 4)


  User Registration - Professional
    √ bug: technical error (12128ms)


  1 passing (15s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     15 seconds                                                                       │
  │ Spec Ran:     inscription_utilisateur_ko.cy.js                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 5 seconds                                                  

  -  Video output: C:\Users\Lily\Desktop\Testing\TESTFACTORY\workspace\cypress\cypress\projet_tutore_web_loua_hedhili\tests\cypress\videos\inscription_utilisateur_ko.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  recherche_croisiere.cy.js                                                       (4 of 4)


  Cruise search
    √ the user is able to see the available cruises and download the program (8569ms)
    √ the user is able to see the details of the selected cruise and return to the home page (8275ms)
    √ allows the user to fill in the search fields (7773ms)


  3 passing (28s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     28 seconds                                                                       │
  │ Spec Ran:     recherche_croisiere.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 9 seconds                                                  

  -  Video output: C:\Users\Lily\Desktop\Testing\TESTFACTORY\workspace\cypress\cypress\projet_tutore_web_loua_hedhili\tests\cypress\videos\recherche_croisiere.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  connexion_utilisateur.cy.js              00:07        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inscription_utilisateur.cy.js            00:24        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inscription_utilisateur_ko.cy.js         00:15        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  recherche_croisiere.cy.js                00:28        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        01:15       11       11        -        -        -  

![execution_connexion](connexion_utilisateur.cy.js.mp4)
![execution_inscription_ko](inscription_utilisateur_ko.cy.js.mp4)
![execution_inscription](inscription_utilisateur.cy.js.mp4)
![execution_recherche](recherche_croisiere.cy.js.mp4)
