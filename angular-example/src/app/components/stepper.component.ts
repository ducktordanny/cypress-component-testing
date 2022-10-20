import {Component, EventEmitter, Input, Output} from "@angular/core";

type CountChange = '+' | '-';

@Component({
  selector: 'app-stepper',
  template: `
    <section>
      <button data-test-id="stepper.decrement" (click)="decrement()">-</button>
      <span data-test-id="stepper.count">{{count}}</span>
      <button data-test-id="stepper.increment" (click)="increment()">+</button>
    </section>
  `,
  styles: [`
    section {
      margin: 8px;
      padding: 8px
    }

    span {
      padding: 0 8px;
    }

    button {
      background-color: white;
      color: #187ab2;
      border: 1px solid #187ab2;
      border-radius: 8px;
      padding: 8px;
      transition: background-color 200ms;
    }

    button:hover {
      background-color: #cecece;
    }

    button:active {
      background-color: #a7a7a7;
    }
  `],
})
export class StepperComponent {
  @Input() count: number = 0;
  @Output() change = new EventEmitter<CountChange>();

  public increment(): void {
    this.count += 1;
    this.change.emit('+');
  }

  public decrement(): void {
    this.count -= 1;
    this.change.emit('-');
  }
}
