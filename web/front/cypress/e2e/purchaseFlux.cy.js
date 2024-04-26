describe("Test d'administració", () => {
  it('Inicia sessió al transversal 3, escolleix una sessió i compra tres entrades', () => {
    cy.visit('https://tr3marbenalc.daw.inspedralbes.cat/')
    cy.get('.menu__dreta_registre').click()
    cy.get('.modal__campCorreu').type('a21marbenalc@inspedralbes.cat')
    cy.get('.modal__enregistrament').click()
    cy.contains('Próximes sessions').click()
    cy.get('.cartaPeli').first().click()
    cy.contains('Reservar entrades').click()
    cy.get('.sala__butaca').not('.sala__butaca_ocupada')
      .then(butaques => {
        const count = butaques.length
        const randomOption1 = butaques.eq((Math.floor(Math.random() * count))) 
        const randomOption2 = butaques.eq((Math.floor(Math.random() * count))) 
        const randomOption3 = butaques.eq((Math.floor(Math.random() * count))) 
        cy.wrap(randomOption1).click()
        cy.wrap(randomOption2).click()
        cy.wrap(randomOption3).click()
      })
  })
})