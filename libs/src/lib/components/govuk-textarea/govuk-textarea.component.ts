import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { GovukCharacterCountComponent } from '../govuk-character-count/govuk-character-count.component';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GovukFieldComponent } from '../govuk-field/govuk-field.component';

@Component({
    selector: 'govuk-textarea',
    templateUrl: './govuk-textarea.component.html',
    styleUrls: ['./govuk-textarea.component.scss'],
    standalone: true,
    imports: [GovukFieldComponent, FormsModule, NgClass, GovukCharacterCountComponent]
})
export class GovukTextareaComponent {
  
  @Input() public id?: string;
  @Input() public name?: string;
  @Input() public class?: string;
  @Input() public type?: string;
  @Input() public rows?: string = '5';
  @Input() public maxlength?: number;

  @Input() public enableCharacterCount?: boolean = false;
  @Input() public maxCharacterRemaining: number = 0;
  public numCharsRemaining: number = 0;

  @Input() public label!: string;
  @Input() public labelClass?: string;
  @Input() public isPageHeading?: boolean = false;
  @Input() public labelFor?: string;

  @Input() public hint?: string;
  @Input() public hintClass?: string;

  @Input() public errorText?: string;
  @Input() public errorClass?: string;

  @Input() public model: any;

  @Output() modelChange = new EventEmitter();

  ngOnInit(){
    if(this.enableCharacterCount) 
      this.numCharsRemaining = this.maxCharacterRemaining;
  }

  textareaNgModelChange(event: any) {
    this.calculateNumCharsRemaining(event);
    this.modelChange.emit(event)
  }

  private calculateNumCharsRemaining(input: string){
    if(this.enableCharacterCount) 
      this.numCharsRemaining = this.maxCharacterRemaining - input.length;
  }
}
