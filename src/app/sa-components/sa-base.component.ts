import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GovukHeaderComponent,
  GovukFooterComponent,
  GovukCookieBannerComponent,
  GovukPhaseBannerComponent, } from '@hmcts-sa-components';
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'lib-sa-components',
  standalone: true,
  imports: [CommonModule,
    GovukFooterComponent,
    GovukHeaderComponent,
    GovukCookieBannerComponent,
    GovukPhaseBannerComponent,
    RouterOutlet],
  templateUrl: './sa-base.component.html',
  styleUrls: ['./sa-base.component.scss'],
})
export class SaBaseComponent {}
