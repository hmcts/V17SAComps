import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GovukAccordionComponent,
  GovukAccordionSectionComponent,
  GovukButtonComponent, ArrowRightIconComponent,
} from '@hmcts/sa-components';

@Component({
  selector: 'lib-test-page2',
  standalone: true,
  imports: [
    CommonModule,
    GovukAccordionComponent,
    GovukAccordionSectionComponent,
    GovukButtonComponent,
    ArrowRightIconComponent,
  ],
  templateUrl: './test-page2.component.html',
  styleUrls: ['./test-page2.component.scss'],
})
export class TestPage2Component {
  testContent = [
    {
      id: '1',
      heading: 'Writing well for the web',
      summary: 'Summary of how to write well for the web',
      content: 'This is the content for Writing well for the web.',
    },
    {
      id: '2',
      heading: 'Writing well for specialists',
      summary: 'Summary of how to write well for specialists',
      content: 'This is the content for Writing well for specialists.',
    },
    {
      id: '4',
      heading: 'How people read',
      content: 'This is the content for How people read.',
    },
    {
      id: '3',
      heading: 'Know your audience',
      content: 'This is the content for Know your audience.',
    },
  ];
}
