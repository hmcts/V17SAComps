import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'govuk-task-list-row',
  templateUrl: './govuk-task-list-row.component.html',
  styleUrls: ['./govuk-task-list-row.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class GovukTaskListRowComponent {
  @Input() public firstItem: boolean = false;
}
