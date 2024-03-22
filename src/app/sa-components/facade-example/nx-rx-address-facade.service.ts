import { inject, Injectable } from '@angular/core';
import { AddressFacadeService } from './address.facade.service';
import { Address } from '@hmcts/sa-components';
import { Store } from '@ngrx/store';
import { addressActions } from './polluted-component/state/address.actions';

@Injectable()
export class NxRxAddressFacadeService implements AddressFacadeService {
  #store = inject(Store)
  load() {
    this.#store.dispatch(addressActions.load())
  }
  getAddresses(): Address[] {
    return [{
      addressLine1: '102 Petty France',
      addressLine2: '',
      addressTown: 'London',
      addressCounty: '',
      addressPostcode: 'SW1H 9AJ'
    }];
  }

  removeAddress(address: Address): void {
  }

  removeAddressAt(index: number): void {
  }

  updateAddress(address: Address): void {
    this.#store.dispatch(addressActions.updated({address}))
  }


}
