describe('Tasks', () => {
  it('Should create a task', () => {
    cy.visit('/')

    cy.get('input[placeholder="Task name"]').type('Make Coffee')
    cy.get('input[placeholder="Estimated time"]').type('15 minutes')
    cy.get('button[type="submit"]').click()

    cy.contains('Make Coffee')
    cy.screenshot('create-task')
  })

  it('Should toggle a task', () => {
    cy.visit('/')

    cy.get('input[placeholder="Task name"]').type('Study Tests')
    cy.get('input[placeholder="Estimated time"]').type('3 hours')
    cy.get('button[type="submit"]').click()

    cy.get('input[placeholder="Task name"]').type('Play CSGO')
    cy.get('input[placeholder="Estimated time"]').type('2 hours')
    cy.get('button[type="submit"]').click()

    cy.contains('Study Tests').dblclick()
    cy.screenshot('first-toggle-task')
  })
})
