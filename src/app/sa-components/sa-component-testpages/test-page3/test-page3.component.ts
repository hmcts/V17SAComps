import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GovukBackLinkComponent,
  GovukDetailsComponent,
} from '@hmcts/sa-components';

const detailsHeader = 'Help with Nationality';
@Component({
  selector: 'lib-test-page3',
  standalone: true,
  imports: [CommonModule, GovukDetailsComponent, GovukBackLinkComponent],
  templateUrl: './test-page3.component.html',
  styleUrls: ['./test-page3.component.scss'],
})
export class TestPage3Component {
  protected readonly detailsHeader = detailsHeader;
}
