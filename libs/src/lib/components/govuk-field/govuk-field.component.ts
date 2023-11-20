import { Component, Input } from '@angular/core';
import { GovukErrorComponent } from '../govuk-error/govuk-error.component';
import { GovukHintComponent } from '../govuk-hint/govuk-hint.component';
import { NgIf } from '@angular/common';
import { GovukLabelComponent } from '../govuk-label/govuk-label.component';
import { GovukErrorLineDirective } from '../../directives/govuk-error-line.directive';

@Component({
  selector: 'govuk-field',
  templateUrl: './govuk-field.component.html',
  standalone: true,
  imports: [
    GovukErrorLineDirective,
    GovukLabelComponent,
    NgIf,
    GovukHintComponent,
    GovukErrorComponent,
  ],
})
export class GovukFieldComponent {
  @Input() public id?: string;
  @Input() public class?: string;

  @Input() public label!: string;
  @Input() public labelClass?: string;
  @Input() public labelFor?: string;
  @Input() public isPageHeading?: boolean = false;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;
}
