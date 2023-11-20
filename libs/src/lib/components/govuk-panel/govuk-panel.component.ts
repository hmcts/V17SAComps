import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'govuk-panel',
  templateUrl: './govuk-panel.component.html',
  standalone: true,
  imports: [NgIf],
})
export class GovukPanelComponent {
  @Input() public id?: string;
  @Input() public title?: string;
}
