import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GovukBreadcrumbComponent,
  GovukBreadcrumbGroupComponent,
  BankDetailsComponent
} from "@hmcts/sa-components";

@Component({
  selector: 'app-test-page5',
  standalone: true,
  imports: [CommonModule, GovukBreadcrumbComponent, GovukBreadcrumbGroupComponent, BankDetailsComponent],
  templateUrl: './test-page5.component.html',
  styleUrl: './test-page5.component.scss'
})
export class TestPage5Component {

  public breadCrumbs = [
    { link: '#', label: 'Home'},
    { link: '#', label: 'Passports, travel and living abroad'},
    { link: '#', label: 'Travel abroad'}
  ]

}
