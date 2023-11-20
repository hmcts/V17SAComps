import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'govuk-error',
  templateUrl: './govuk-error.component.html',
  standalone: true,
  imports: [NgIf],
})
export class GovukErrorComponent {
  @Input() public id?: string;
  @Input() public text?: string;
  @Input() public class?: string;
}
