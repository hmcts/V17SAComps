import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'govuk-label',
  templateUrl: './govuk-label.component.html',
  standalone: true,
  imports: [NgIf],
})
export class GovukLabelComponent {
  @Input() id?: string;
  @Input() text!: string;
  @Input() class?: string;
  @Input() isPageHeading?: boolean = false;
  @Input() for?: string;
}
