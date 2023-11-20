import { Component, Input } from '@angular/core';
import { GovukFooterComponent } from '../govuk-footer/govuk-footer.component';
import { GovukHeaderComponent } from '../govuk-header/govuk-header.component';

@Component({
  selector: 'govuk-page',
  templateUrl: './govuk-page.component.html',
  standalone: true,
  imports: [GovukHeaderComponent, GovukFooterComponent],
})
export class GovukPageComponent {
  @Input() headerTitle?: string;
  @Input() headerTitleLink?: string;
  @Input() footerLinks!: { title: string; href: string }[];
  @Input() govukLogoLink?: string = '#';
}
