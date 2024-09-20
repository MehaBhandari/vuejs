import DisplayList from './DisplayList.vue'

describe('<DisplayList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(DisplayList)
  })
})