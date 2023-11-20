import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'govuk-list-item',
  template: `<ng-template><ng-content /></ng-template>`,
  standalone: true,
})
export class GovukListItemComponent {
  @Input() public link?: string;
  @Input() public text?: string;
  @Input() public newTab: boolean = false;

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;
}
