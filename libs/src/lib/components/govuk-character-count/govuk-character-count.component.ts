import {
  Component,
  Input,
  Pipe,
  PipeTransform,
  forwardRef,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'govuk-character-count',
  templateUrl: './govuk-character-count.component.html',
  standalone: true,
  imports: [NgIf, forwardRef(() => AbsoluteValuePipe)],
})
export class GovukCharacterCountComponent {
  @Input() public enableCharacterCount?: boolean = false;
  @Input() public numCharactersRemaining!: number;
}

@Pipe({
  name: 'absoluteValue',
  standalone: true,
})
export class AbsoluteValuePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return Math.abs(value);
  }
}
