import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserAddressContainerComponent } from '../../../wrappers/AddUserAddress/add-user-address-container-component';

@Component({
  selector: 'lib-test-page1',
  standalone: true,
  imports: [CommonModule, AddUserAddressContainerComponent],
  styleUrls: ['./test-page1.component.scss'],
  template: `
      <div class="govuk-width-container">
          <govuk-add-user-address-container-component nextStep="test-page2">
          </govuk-add-user-address-container-component>
      </div>
  `
})
export class TestPage1Component {}
