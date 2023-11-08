import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'govuk-breadcrumb',
    templateUrl: './govuk-breadcrumb.component.html',
    styleUrls: ['./govuk-breadcrumb.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class GovukBreadcrumbComponent {
  @Input() public text!: string;
  @Input() public link!: string;
  @Input() public firstChild?: boolean = false;
}
