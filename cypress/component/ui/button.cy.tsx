import { Button } from "~ui/atoms/button";

describe('Button', () => {
  it('playground', () => {
    cy.mount(<Button>Text</Button>);
    // cy.get('button').should('have.text', 'Text');
  })
})
