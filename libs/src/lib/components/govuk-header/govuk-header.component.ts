import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'govuk-header',
    templateUrl: './govuk-header.component.html',
    styleUrls: ['./govuk-header.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GovukHeaderComponent {
  @Input() title?: string;
  @Input() titleLink?: string;
  @Input() govukLogoLink?: string = "#";
}
