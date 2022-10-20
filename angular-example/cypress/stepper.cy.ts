import {StepperComponent} from "../src/app/components/stepper.component";

describe('StepperComponent', () => {
  const incrementSelector = '[data-test-id="stepper.increment"]';
  const decrementSelector = '[data-test-id="stepper.decrement"]';
  const countSelector = '[data-test-id="stepper.count"]';

  it('should check default value', () => {
    cy.mount('<app-stepper></app-stepper>', {
      declarations: [StepperComponent],
    });
    cy.get(countSelector).should('have.text', '0');
  })

  it('should check custom value', () => {
    cy.mount('<app-stepper [count]="123"></app-stepper>', {
      declarations: [StepperComponent],
    });
    cy.get(countSelector).should('have.text', '123');
  })

  it('should check custom value', () => {
    cy.mount('<app-stepper [count]="5"></app-stepper>', {
      declarations: [StepperComponent],
    });
    cy.get(incrementSelector).click();
    cy.get(countSelector).should('have.text', '6');
    cy.get(decrementSelector).dblclick();
    cy.get(countSelector).should('have.text', '4');
  })

  it('should fire change event with specific change type', () => {
    cy.mount('<app-stepper (change)="change.emit($event)"></app-stepper>', {
      declarations: [StepperComponent],
      componentProperties: {
        change: {
          emit: cy.spy().as('changeSpy'),
        },
      },
    });
    cy.get(incrementSelector).click();
    cy.get('@changeSpy').should('have.been.calledWith', '+');
    cy.get(decrementSelector).click();
    cy.get('@changeSpy').should('have.been.calledWith', '-');
  });
})
