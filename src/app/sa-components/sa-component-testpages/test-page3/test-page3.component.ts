import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GovukAccordionComponent, GovukAccordionSectionComponent, GovukBodyComponent} from "@hmcts/sa-components";

@Component({
  selector: 'lib-test-page3',
  standalone: true,
  imports: [CommonModule, GovukAccordionComponent, GovukAccordionSectionComponent, GovukBodyComponent],
  templateUrl: './test-page3.component.html',
  styleUrls: ['./test-page3.component.scss'],
})
export class TestPage3Component {}
