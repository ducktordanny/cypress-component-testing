import {Component} from "@angular/core";

@Component({
  selector: 'app-card',
  template: `
    <section>
      <article class="card-header">
        <ng-content select="[cardHeader]"></ng-content>
      </article>
      <article class="card-content">
        <ng-content></ng-content>
      </article>
    </section>
  `,
  styles: [`
    section {
      border: 1px solid black;
      border-radius: 8px;
      width: fit-content;
      padding: 8px;
    }

    .card-header {
      font-weight: 700;
    }
  `],
})
export class CardComponent {}
