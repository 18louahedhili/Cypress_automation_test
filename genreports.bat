cd tests
node_modules\.bin\cypress run combine-reports > ../doc/execution.md
echo (![execution_connexion](../tests/cypress/videos/connexion_utilisateur.cy.js.mp4) ) > ../doc/execution.md
echo (![execution_inscription_ko](../tests/cypress/videos/inscription_utilisateur_ko.cy.js.mp4) )> ../doc/execution.md
echo (![execution_inscription](../tests/cypress/videos/inscription_utilisateur.cy.js.mp4)) > ../doc/execution.md
echo (![execution_recherche](../tests/cypress/videos/recherche_croisiere.cy.js.mp4)) > ../doc/execution.md
echo ("END")