import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'govuk-loading',
  templateUrl: './govuk-loading.component.html',
  standalone: true,
  imports: [NgIf],
})
export class GovukLoadingComponent {
  @Input() public id?: string;
  @Input() public isLoading?: boolean = false;
}
