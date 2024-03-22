import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address, AddressFormComponent } from '@hmcts/sa-components';
import { ActivatedRoute, Router } from '@angular/router';
import { MemoizedSelector, Store } from '@ngrx/store';
import { addressFeatures } from './state/address.reducer';
import { addressActions } from './state/address.actions';
import { HttpClient } from '@angular/common/http';
import { fromAddresses } from './state/address.selectors';

@Component({
  selector: 'app-polluted-component',
  standalone: true,
  imports: [CommonModule, AddressFormComponent],
  templateUrl: './polluted-edit.component.html',
  styleUrl: './polluted-edit.component.scss',
})
export class PollutedEditComponent implements OnInit {
  @Input()
  nextStep: string = '';

  primaryAddress = {
    addressLine1: '',
    addressLine2: '',
    addressTown: '',
    addressCounty: '',
    addressPostcode: ''
  } as Address

  #store = inject(Store)
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.#store.dispatch(addressActions.load())
    this.#store.select('addresses').subscribe(
      fromAddresses => this.primaryAddress = fromAddresses.addresses[0] as Address
    )
  }
  submitNext(address: Address) {
      this.#store.dispatch(addressActions.update({address: this.primaryAddress}))
  }


}
