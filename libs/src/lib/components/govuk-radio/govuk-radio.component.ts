import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GovukHintComponent } from '../govuk-hint/govuk-hint.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'govuk-radio',
  templateUrl: './govuk-radio.component.html',
  styleUrls: ['./govuk-radio.component.scss'],
  standalone: true,
  imports: [FormsModule, GovukHintComponent],
})
export class GovukRadioComponent {
  @Input() public id!: string;
  @Input() public value!: any;
  @Input() public name!: any;
  @Input() public label?: string;
  @Input() public hint?: string;
  @Input() public model?: any;

  @Output() public onRadioClicked = new EventEmitter();
  @Output() public onKeyupEnter = new EventEmitter();

  clicked() {
    this.onRadioClicked.emit(this.value);
  }
}
