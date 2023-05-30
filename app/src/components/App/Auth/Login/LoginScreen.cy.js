import React from 'react'
import LoginScreen from './LoginScreen'

describe('<LoginScreen />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoginScreen />)
  })
})