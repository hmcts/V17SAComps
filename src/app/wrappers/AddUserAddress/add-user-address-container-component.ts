import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressFormComponent, Address } from '@hmcts/sa-components';

@Component({
  selector: 'govuk-add-user-address-container-component',
  standalone: true,
  imports: [CommonModule, AddressFormComponent, AddressFormComponent],
  styleUrls: ['./add-user-address-container-component.scss'],
  template:`
      <div class="govuk-width-container">
          <govuk-address-form (emitAddress)="submitNext($event)"></govuk-address-form>
      </div>
  `

})
export class AddUserAddressContainerComponent {
  @Input()
  nextStep: string = '';
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}
  submitNext(address: Address) {
    //TODO in a real world application there would be a call to a facade service to transmit the address
    this.router.navigate([this.nextStep], { relativeTo: this.route.parent });
  }
}
