import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GovukFooterComponent} from "../components/govuk-footer/govuk-footer.component";
import {GovukHeaderComponent} from "../components/govuk-header/govuk-header.component";
import {GovukCookieBannerComponent} from "../components/govuk-cookie-banner/govuk-cookie-banner.component";
import {GovukPhaseBannerComponent} from "../components/govuk-phase-banner/govuk-phase-banner.component";
import {AddUserAddressContainerComponent} from "../wrappers/AddUserAddress/add-user-address-container-component";

@Component({
  selector: 'lib-sa-components',
  standalone: true,
  imports: [CommonModule, GovukFooterComponent, GovukHeaderComponent, GovukCookieBannerComponent, GovukPhaseBannerComponent, AddUserAddressContainerComponent],
  templateUrl: './sa-components.component.html',
  styleUrls: ['./sa-components.component.scss'],
})
export class SaComponentsComponent {}
