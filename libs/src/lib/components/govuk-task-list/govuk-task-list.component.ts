import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import { GovukTaskListItemComponent } from './govuk-task-list-item.component';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'govuk-task-list',
    templateUrl: './govuk-task-list.component.html',
    styleUrls: ['./govuk-task-list.component.scss'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet]
})
export class GovukTaskListComponent implements AfterViewInit {
  @ContentChildren(GovukTaskListItemComponent)
  private rows!: QueryList<GovukTaskListItemComponent>;
  
  public taskListRows: GovukTaskListItemComponent[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  public ngAfterViewInit(): void {
    this.taskListRows = this.rows.toArray();
    this.changeDetectorRef.detectChanges();
  }
}