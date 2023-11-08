import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'govuk-link-action',
    templateUrl: './govuk-link-action.component.html',
    standalone: true,
    imports: [NgIf]
})
export class GovukLinkActionComponent {
  @Input() id?: string; 
  @Input() text?: string;
  @Input() href?: string;
  @Input() action?: any;
  
  onClick(event: any) {
    this.action.action(event)
  }

}
