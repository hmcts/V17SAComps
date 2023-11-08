import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'govuk-button',
    templateUrl: './govuk-button.component.html',
    standalone: true,
    imports: [RouterLink, NgIf]
})
export class GovukButtonComponent {

  @Input() public id!: string;
  @Input() public name: string = '';
  @Input() public classes: string = '';
  @Input() public isLoading: boolean = false;
  @Input() public loadingText: string = 'Loading';
  @Input() public disabled: boolean = false;
  @Input() public link?: string;

  @Output() onClick = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();

  getRouterLink() {
    return this.link ? [this.link] : null;
  }

  triggerOnClick() {
    if (!this.isLoading && !this.disabled) {
      this.onClick.emit();
    }
  }
}
