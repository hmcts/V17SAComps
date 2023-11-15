import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import {AddressFormComponent} from "../../patterns/address-form/address-form.component";
import {Address} from "../../models/address-model";

@Component({
  selector: 'govuk-add-user-address-container-component',
  standalone: true,
  imports: [CommonModule,AddressFormComponent, AddressFormComponent],
  templateUrl: './add-user-address-container-component.html',
  styleUrls: ['./add-user-address-container-component.scss'],
})
export class AddUserAddressContainerComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  submitNext(address:Address) {
    //this.router.navigate(['bank-details'],{relativeTo: this.route.parent});
  }
}
