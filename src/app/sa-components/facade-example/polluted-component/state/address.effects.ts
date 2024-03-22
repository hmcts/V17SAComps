import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { addressActions } from './address.actions';
import { map, switchMap, tap } from 'rxjs';
import { Address } from '@hmcts/sa-components';

@Injectable()
export class AddressEffects{
  #actions = inject(Actions);
  #store = inject(Store);
  // #router = inject(Router);

  #dummyAddress: Address = {
    addressLine1: '102 Petty France',
    addressLine2: '',
    addressTown: 'London',
    addressCounty: '',
    addressPostcode: 'SW1H 9AJ'
  }

  load$ = createEffect( () =>
    this.#actions.pipe(
      ofType(addressActions.load),
       tap(() => {
         debugger;
         return this.#store.dispatch(addressActions.loaded({addresses:[this.#dummyAddress]} ))})
       //switchMap(() => { addressActions.loaded,  addresses: [this.#dummyAddress]})
    )
  )
}
