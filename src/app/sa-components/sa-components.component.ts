import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GovukHeaderComponent,
  GovukFooterComponent,
  GovukCookieBannerComponent,
  GovukPhaseBannerComponent,
  AddUserAddressContainerComponent
  } from '@hmcts-sa-components';
import {TestPage1Component} from "./sa-component-testpages/test-page1/test-page1.component";


@Component({
  selector: 'lib-sa-components',
  standalone: true,
  imports: [CommonModule,
    GovukFooterComponent,
    GovukHeaderComponent,
    GovukCookieBannerComponent,
    GovukPhaseBannerComponent,
    AddUserAddressContainerComponent, TestPage1Component],
  templateUrl: './sa-components.component.html',
  styleUrls: ['./sa-components.component.scss'],
})
export class SaComponentsComponent {}
