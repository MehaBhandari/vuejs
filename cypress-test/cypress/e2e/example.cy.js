// https://on.cypress.io/api

describe('This will ensure that application renders as expected', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
  
  it('h1 shpuld display 100', () => {
    cy.visit('/')
    cy.contains("The Count is: 100")
  })
  
  it('Does it render correct h3 Tag', () => {
    cy.visit('/')
    cy.contains('h3', 'You’ve successfully created a project with')
  })
  
  it('Updates the timer on button', () => {
    cy.visit('/')
    cy.contains("The Count is: 100")
    cy.get(".my-btn").click()
    cy.contains("The Count is: 105")
    cy.get(".my-btn").click()
    cy.contains("The Count is: 102")
  })
})
