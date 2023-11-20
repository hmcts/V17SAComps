import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-nav',
  template: '',
  standalone: true,
})
export class GovukNavComponent {
  @Input() public label!: string;
  @Input() public link!: string;
  @Input() public active?: boolean = false;
}
