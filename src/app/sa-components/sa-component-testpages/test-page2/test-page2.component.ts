import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GovukTextareaComponent} from "../../../../../libs/src/lib/components/govuk-textarea/govuk-textarea.component";

@Component({
  selector: 'lib-test-page2',
  standalone: true,
  imports: [CommonModule, GovukTextareaComponent],
  templateUrl: './test-page2.component.html',
  styleUrls: ['./test-page2.component.scss'],
})
export class TestPage2Component {}
