import {AfterContentInit, Component, Input, ViewEncapsulation} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ArrowRightIcon} from "../../icons/arrow-right.icon";


@Component({
  selector: 'govuk-accordion-section',
  templateUrl: './govuk-accordion-section.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  styleUrls: ['./govuk-accordion.component.scss'],
  imports: [CdkAccordionModule, ArrowRightIcon,
    NgClass, NgIf],
})
export class GovukAccordionSectionComponent implements AfterContentInit {
  @Input() public id!: string;
  @Input() public heading?: string;
  @Input() public summary?: string;
  @Input() public active?: boolean = false;

  expandClassName?: string = 'govuk-accordion__section--expanded';
  showHideButtonText?: string =  'Show';
  ariaLabelString?: string =  'Show this section';
  expand() {
    this.active = !this.active;
    this.showHideButtonText = this.active ? 'Hide' : 'Show';
  }
  open() {
    this.active = true;
    this.showHideButtonText = 'Hide'
  }
  close() {
    this.active = false;
    this.showHideButtonText = 'Show'
  }

  ngAfterContentInit(): void {
    this.ariaLabelString = this.setAriaLabel();
    }

    private setAriaLabel():string {
      if (this.summary && this.heading) {
        return   `${this.heading}, ${this.summary}, 'Show this section'`
      } else if (this.heading) {
        return  `${this.heading}, 'Show this section'`
      }else if (this.summary){
       return   `${this.summary}, 'Show this section'`
      }
      return 'Show this section'
    }
}
