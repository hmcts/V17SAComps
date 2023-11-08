import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'govuk-task-list-item',
    templateUrl: './govuk-task-list-item.component.html',
    standalone: true
})
export class GovukTaskListItemComponent {
  @Input() public sectionNumber!: string;
  @Input() public text?: string;
  
  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;
}
