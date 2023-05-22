

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.12.0                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v18.16.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          2 found (connexion_utilisateur.cy.js, inscription_utilisateur.cy.js)           │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  connexion_utilisateur.cy.js                                                     (1 of 2)


  User Login
    √ allows users to log in successfully with valid credentials (2418ms)
    √ prevents users from logging in with invalid credentials (1038ms)


  2 passing (5s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     5 seconds                                                                        │
  │ Spec Ran:     connexion_utilisateur.cy.js                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 0 seconds                                                  

  -  Video output: C:\Users\Lily\Desktop\Testing\TESTFACTORY\workspace\cypress\cypress\projet_tutore_web_loua_hedhili\tests\cypress\videos\connexion_utilisateur.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  inscription_utilisateur.cy.js                                                   (2 of 2)


  User Registration - Individual
    √ allows users to register successfully on the site (5403ms)
    √ prevents users from registering without filling in all required fields (4472ms)
    √ prevents users from registering without confirmation his password (4301ms)
    √ prevents users from registering without typing informations (1710ms)


  4 passing (18s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     17 seconds                                                                       │
  │ Spec Ran:     inscription_utilisateur.cy.js                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 5 seconds                                                  

  -  Video output: C:\Users\Lily\Desktop\Testing\TESTFACTORY\workspace\cypress\cypress\projet_tutore_web_loua_hedhili\tests\cypress\videos\inscription_utilisateur.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  connexion_utilisateur.cy.js              00:05        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  inscription_utilisateur.cy.js            00:17        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:22        6        6        -        -        -  

