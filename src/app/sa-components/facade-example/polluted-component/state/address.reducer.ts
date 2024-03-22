import { Address } from '@hmcts/sa-components';
import { createFeature, createReducer, on } from '@ngrx/store';
import { addressActions } from './address.actions';


export interface State {
  addresses: Address[]
}
export const initialState : State = {
  addresses: [ {
    addressLine1: '102 Petty France',
    addressLine2: '',
    addressTown: 'London',
    addressCounty: '',
    addressPostcode: 'SW1H 9AJ'
  }]
}

export const addressFeatures = createFeature({
  name: 'addresses',
 reducer: createReducer<State>(
   initialState,
   on(addressActions.load, (state) => ({...state})),
   on(addressActions.loaded, (state,{addresses}) => ({
  ...state,
  addresses,
})),
   on(addressActions.added, addressActions.updated,addressActions.removed, ()=> initialState)
 ),
});
