import { Component, Input } from '@angular/core';

@Component({
    selector: 'govuk-body',
    templateUrl: './govuk-body.component.html',
    standalone: true
})
export class GovukBodyComponent {
  @Input() public class?: string;
}