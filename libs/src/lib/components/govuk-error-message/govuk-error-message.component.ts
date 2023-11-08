import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'govuk-error-message',
    templateUrl: './govuk-error-message.component.html',
    standalone: true,
    imports: [NgIf]
})
export class GovukErrorMessageComponent {
  @Input() public showError?: boolean = false;
  @Input() public message?: string;
  @Input() public advice?: string;
}
