describe("Test d'administració", () => {
  it('Inicia sessió al transversal 3 i llegeix que el username és el correcte', () => {
    cy.visit('https://tr3marbenalc.daw.inspedralbes.cat/')
    cy.get('.menu__dreta_registre').click()
    cy.get('.modal__campCorreu').type('a21marbenalc@inspedralbes.cat')
    cy.get('.modal__enregistrament').click()
    cy.contains('Admin').click()
    cy.url().should('include', '/admin')
    cy.get('.admin__control').contains('Crear').click()
    cy.get('#peli').select(3)
    cy.get('#dia').type('2024-05-02')
    cy.get('#hora').select(2)
    cy.get('#vip').select(1)
    cy.get('#descompte').select(1)
    cy.get(".adminTaula table")
    .find("tr")
    .then((row) => {
      cy.log(row.length);
    });
  })
})