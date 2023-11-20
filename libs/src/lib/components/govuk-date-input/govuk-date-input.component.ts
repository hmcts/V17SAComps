import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GovukLinkActionComponent } from '../govuk-link-action/govuk-link-action.component';
import { FormsModule } from '@angular/forms';
import { GovukFieldsetComponent } from '../govuk-fieldset/govuk-fieldset.component';

@Component({
  selector: 'govuk-date-input',
  templateUrl: './govuk-date-input.component.html',
  standalone: true,
  imports: [GovukFieldsetComponent, FormsModule, GovukLinkActionComponent],
})
export class GovukDateInputComponent {
  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public class?: string;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @Input() public title?: string;
  @Input() public titleClass?: string;
  @Input() public fieldsetMarginBottom?: string;
  @Input() public isPageHeading?: boolean = false;

  @Input() public linkActionText?: string;
  @Input() public linkActionAction?: any;

  @Output() modelChange = new EventEmitter();

  el: any;

  @Input() public model: any;

  constructor(el: ElementRef) {
    this.el = el;
    this.model = { day: '', month: '', year: '' };
  }
}
