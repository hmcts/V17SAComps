import { Component } from '@angular/core';

@Component({
  selector: 'aspect-ratio-icon',
  styles: `@use '../../../../node_modules/govuk-frontend/govuk/all';`,
  template: `
    <svg
      class="govuk-button__start-icon"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M560-280h200v-200h-80v120H560v80ZM200-480h80v-120h120v-80H200v200Zm-40 320q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"
      />
    </svg>
  `,
  standalone: true,
})
export class AspectRatioIcon {}
