import { Component } from '@angular/core';

@Component({
  selector: 'govuk-back-link',
  templateUrl: './govuk-back-link.component.html',
  styleUrls: ['./govuk-back-link.component.scss'],
  standalone: true,
})
export class GovukBackLinkComponent {
  onKeyEnter() {
    this.navigateBack();
  }

  navigateBack() {
    history.back();
  }
}
