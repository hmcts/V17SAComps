import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'govuk-notification-banner',
    templateUrl: './govuk-notification-banner.component.html',
    standalone: true,
    imports: [NgIf]
})
export class GovukNotificationBannerComponent {
  @Input() public id?: string; 
  @Input() public title?: string;
}
