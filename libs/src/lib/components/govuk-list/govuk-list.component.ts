import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { GovukListItemComponent } from './govuk-list-item.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
@Component({
    selector: 'govuk-list',
    templateUrl: './govuk-list.component.html',
    standalone: true,
    imports: [NgFor, NgIf, NgTemplateOutlet]
})
export class GovukListComponent implements AfterViewInit {
  @Input() public classes?: string;

  @ContentChildren(GovukListItemComponent)
  public items!: QueryList<GovukListItemComponent>;

  constructor(private changeDetectorRef: ChangeDetectorRef){}
  
  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
