import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GovukAccordionComponent,
  GovukAccordionSectionComponent,
} from '@hmcts-sa-components';

@Component({
  selector: 'lib-test-page2',
  standalone: true,
  imports: [
    CommonModule,
    GovukAccordionComponent,
    GovukAccordionSectionComponent,
  ],
  templateUrl: './test-page2.component.html',
  styleUrls: ['./test-page2.component.scss'],
})
export class TestPage2Component {
  testContent = [
    {
      id: '1',
      heading: 'Writing well for the web',
      summary: 'This is the content for Writing well for the web.',
    },
    {
      id: '2',
      heading: 'Writing well for specialists',
      summary: 'This is the content for Writing well for specialists.',
    },
    {
      id: '4',
      heading: 'How people read',
      summary: 'This is the content for How people read.',
    },
    {
      id: '3',
      heading: 'Know your audience',
      summary: 'This is the content for Know your audience.',
    },
  ];
}
