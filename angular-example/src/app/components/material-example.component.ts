import {Component, EventEmitter, Output} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-material-example',
  template: `
    <form>
      <mat-form-field>
        <mat-label>Pain Tech</mat-label>
        <input matInput type="text" data-test-id="material-example.input" #input>
      </mat-form-field>
      <button mat-button type="button" color="primary" data-test-id="material-example.button" (click)="onClick(input.value)">Click me</button>
    </form>
  `,
})
export class MaterialExampleComponent {
  @Output() painSubmit = new EventEmitter<string>();

  onClick(value: string) {
    this.painSubmit.emit(value);
  }
}
