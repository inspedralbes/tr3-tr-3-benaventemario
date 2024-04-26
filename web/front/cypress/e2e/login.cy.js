describe("Test d'inici de sessió", () => {
  it('Inicia sessió al transversal 3 i llegeix que el username és el correcte', () => {
    cy.visit('https://tr3marbenalc.daw.inspedralbes.cat/')
    cy.get('.menu__dreta_registre').click()
    cy.get('.modal__campCorreu').type('fake@email.com')
    cy.get('.modal__enregistrament').click()
    cy.get('.menu__dreta').contains('fake')
  })
})