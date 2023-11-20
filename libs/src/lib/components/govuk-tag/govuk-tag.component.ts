import { Component, Input } from '@angular/core';

@Component({
  selector: 'govuk-tag',
  templateUrl: './govuk-tag.component.html',
  styleUrls: ['./govuk-tag.component.scss'],
  standalone: true,
})
export class GovukTagComponent {
  @Input() id?: string;
  @Input() class?: string;
}
