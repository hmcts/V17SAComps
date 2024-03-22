import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address, AddressFormComponent } from '@hmcts/sa-components';
import { AddressFacadeService, AddressFacadeServiceImpl } from '../address.facade.service';

@Component({
  selector: 'app-clean-component',
  standalone: true,
  imports: [CommonModule, AddressFormComponent],
  // templateUrl: './clean-edit.component.html',
  styleUrl: './clean-edit.component.scss',
  template:
    `<div class="govuk-width-container">
      <govuk-address-form [editAddress]="primaryAddress" (emitAddress)="submitNext($event)"></govuk-address-form>
    </div>`
})
export class CleanEditComponent implements OnInit {

  primaryAddress: Address = new Address()
  constructor(private readonly addressService: AddressFacadeServiceImpl ) {
  }
  ngOnInit(): void {
    this.addressService.load();
    this.primaryAddress = this.addressService.getAddresses()[0];
  }
  submitNext($event: Address) {
    this.addressService.updateAddress($event)
  }


}
