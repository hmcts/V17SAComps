import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'govuk-footer',
    templateUrl: './govuk-footer.component.html',
    standalone: true,
    imports: [NgFor]
})
export class GovukFooterComponent {

  @Input() links!: { title: string, href: string }[];
}
