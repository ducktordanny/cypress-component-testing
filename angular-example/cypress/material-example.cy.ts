import {MaterialExampleComponent} from "../src/app/components/material-example.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('MaterialExampleComponent', () => {
  const inputSelector = '[data-test-id="material-example.input"]';
  const buttonSelector = '[data-test-id="material-example.button"]';

  it('should test it with material components', () => {
    // ! MountConfig<T> extends TestModuleMetadata
    cy.mount(`
      <app-material-example (painSubmit)="submit.emit($event)"></app-material-example>
    `, {
      declarations: [MaterialExampleComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      componentProperties: {
        submit: {
          emit: cy.spy().as('painSubmitSpy'),
        },
      },
    });
    cy.get(inputSelector).type('Weekend loading...');
    cy.get(buttonSelector).click();
    cy.get('@painSubmitSpy').should('have.been.calledWith', 'Weekend loading...');
  });
});
