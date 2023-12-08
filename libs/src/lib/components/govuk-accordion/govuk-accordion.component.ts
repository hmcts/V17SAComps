import {AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import {GovukAccordionSectionComponent} from './govuk-accordion-section.component';
import {CommonModule} from "@angular/common";
import {ArrowRightIcon} from "../../icons/arrow-right.icon";


@Component({
  selector: 'govuk-accordion',
  templateUrl: './govuk-accordion.component.html',
  styleUrls: ['./govuk-accordion.component.scss'],
  standalone: true,
  imports: [CommonModule, ArrowRightIcon]
})
export class GovukAccordionComponent  implements OnInit, AfterViewInit{
  @Input() public id?: string;

  @ContentChildren(GovukAccordionSectionComponent)
  public tabs!: QueryList<GovukAccordionSectionComponent>;

  AllSectionsButtonText?: string =  'Open all sections';
  allOpen?: boolean = false;

  toggleAll() {
    if (this.allOpen) {
      this.tabs.toArray().forEach((tab) => tab.close());
      this.AllSectionsButtonText = 'Open all sections';
    } else {
      this.tabs.toArray().forEach((tab) => tab.open());
      this.AllSectionsButtonText = 'Close all sections';
    }
    this.allOpen = !this.allOpen;
  }

  ngOnInit(): void {
    console.log('accordion :: initialised ', this.tabs)
  }

  ngAfterViewInit(): void {
    console.log('accordion :: initialised ', this.tabs)
    console.log('accordion :: AfterViewInit ', this.tabs)
  }
}
