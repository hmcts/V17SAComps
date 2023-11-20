import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { GovukBodyComponent } from '../govuk-body/govuk-body.component';
import { GovukCookieBannerConfirmationComponent } from './govuk-cookie-banner-confirmation.component';
import { GovukCookieBannerMessageComponent } from './govuk-cookie-banner-message.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'govuk-cookie-banner',
  templateUrl: './govuk-cookie-banner.component.html',
  standalone: true,
  imports: [
    NgIf,
    GovukCookieBannerMessageComponent,
    GovukCookieBannerConfirmationComponent,
    GovukBodyComponent,
  ],
})
export class GovukCookieBannerComponent {
  @Input() viewCookiesLink!: string;
  @Input() changeCookiesLink!: string;
  @Input() title!: string;

  @Input() cookiesAccepted: boolean = false;
  @Input() showCookieBanner: boolean = true;
  @Input() showConfirmBanner: boolean = false;

  @Output() onChangeCookies = new EventEmitter();
  @Output() onCookiesAccepted = new EventEmitter();
  @Output() onCookiesRejected = new EventEmitter();
  @Output() onHideCookieBannerConfirmation = new EventEmitter();
}
