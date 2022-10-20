import {CardComponent} from "../src/app/components/card.component";
import {AppModule} from "../src/app/app.module";

// Multi-slot Content Projection example
describe('CardComponent', () => {
  it('should project content', () => {
    cy.mount(`
      <app-card>
        <h1 cardHeader>Pain Tech</h1>
        <p>Component Testing with Cypress</p>
      </app-card>
    `, {declarations: [CardComponent]});
    cy.get('h1').contains('Pain Tech');
    cy.get('p').contains('Component Testing with Cypress');
  })
})
