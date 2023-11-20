import { Component, Input } from '@angular/core';
import { GovukErrorComponent } from '../govuk-error/govuk-error.component';
import { GovukHintComponent } from '../govuk-hint/govuk-hint.component';
import { NgIf } from '@angular/common';
import { GovukErrorLineDirective } from '../../directives/govuk-error-line.directive';

@Component({
  selector: 'govuk-fieldset',
  templateUrl: './govuk-fieldset.component.html',
  standalone: true,
  imports: [
    GovukErrorLineDirective,
    NgIf,
    GovukHintComponent,
    GovukErrorComponent,
  ],
})
export class GovukFieldsetComponent {
  @Input() public id?: string;
  @Input() public class?: string;

  @Input() public hintText?: string;
  @Input() public hintClass?: string;

  @Input() public title?: string;
  @Input() public titleClass?: string;
  @Input() public isPageHeading?: boolean = false;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;
}
