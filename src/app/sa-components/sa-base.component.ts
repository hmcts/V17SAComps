import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import {
  GovukAccordionComponent,
  GovukBodyComponent,
  GovukCookieBannerComponent,
  GovukFooterComponent,
  GovukHeaderComponent,
  GovukPhaseBannerComponent,
} from '@hmcts/sa-components';

@Component({
  selector: 'lib-sa-components',
  standalone: true,
  imports: [
    CommonModule,
    GovukFooterComponent,
    GovukHeaderComponent,
    GovukCookieBannerComponent,
    GovukBodyComponent,
    GovukPhaseBannerComponent,
    RouterOutlet,
    GovukAccordionComponent,
  ],
  templateUrl: './sa-base.component.html',
  styleUrls: ['./sa-base.component.scss'],
})
export class SaBaseComponent {
  defaultLinks = [
    {
      title: 'Privacy',
      href: 'https://www.gov.uk/service-manual/design/collecting-personal-information-from-users',
    },
    {
      title: 'Accessibility',
      href: 'https://www.gov.uk/service-manual/helping-people-to-use-your-service/publishing-information-about-your-services-accessibility',
    },
    {
      title: 'Cookies',
      href: 'https://design-system.service.gov.uk/patterns/cookies-page/',
    },
  ];

  defaultTitle = 'Test Service';
}
