import { Component } from '@angular/core';

@Component({
  selector: 'govuk-arrow-right-icon',
  styles: `@use '../../../../node_modules/govuk-frontend/govuk/all';`,
  template: `
    <svg
      class="govuk-button__start-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
    </svg>
  `,
  standalone: true,
})
export class ArrowRightIconComponent {}
